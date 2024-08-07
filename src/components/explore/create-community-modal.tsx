"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Plus } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAxios } from "@/hooks/use-axios";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import AvatarLogo from "../globals/avatar-logo";
import { Community } from "@/types";
import { ROUTES } from "@/routes";

const CommunityFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name cannot be empty")
    .max(25, "Community name cannot be more than 25 characters"),
  description: z
    .string()
    .min(1, "Tell something about this community")
    .max(250, "Description cannot exceed more than 250 characters"),
  picture: z.string().optional(),
  tags: z.array(z.string(), { message: "Select any tag" }),
});

type CommunityFormSchema = z.infer<typeof CommunityFormSchema>;

export default function CreateCommunityModal() {
  const form = useForm<CommunityFormSchema>({
    resolver: zodResolver(CommunityFormSchema),
    defaultValues: {
      name: "",
      description: "",
      picture: "",
      tags: [],
    },
  });

  const router = useRouter();
  const pathname = usePathname();
  const { mutate } = useAxios();

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files == null || files?.length === 0) {
      form.setError("picture", { message: "Select an image" });
      return;
    }
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const img = e.target?.result?.toString()!;
      setImage(img);
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = async (values: CommunityFormSchema) => {
    if (!image) {
      form.setError("picture", { message: "Select an image" });
      return;
    }
    values = { ...values, picture: image };
    console.log(values);

    const { error, data } = await mutate<Community>(
      "post",
      "/community",
      values
    );

    if (error) {
      toast.error(error);
      return;
    } else if (data) {
      setOpen(false);
      toast.success(data.message);
      router.push(ROUTES.COMMUNITY(data.data.name));
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center gap-3 text-sm mx-2">
        <Plus size={"1.1rem"} /> Create Community
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-primary text-2xl font-bold">
            Create Community
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="picture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="image" className="text-primary">
                    Community Picture
                    <FormDescription className="text-xs">
                      Upload Community Picture
                    </FormDescription>
                    <AvatarLogo
                      src={image || "/images/placeholder.png"}
                      alt="community logo"
                      className="w-28 h-28 mx-auto cursor-pointer border border-gray-400"
                    />
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="image"
                      {...field}
                      type="file"
                      // accept="image/*"
                      onChange={(e) => {
                        handleImageChange(e);
                        return field.onChange;
                      }}
                      className="hidden"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Community Name</FormLabel>
                  <FormDescription className="text-xs">
                    Community name cannot be changed
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">
                    Community Description
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-2">
              <DialogClose asChild>
                <Button variant={"outline"} size={"sm"}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" size={"sm"}>
                Create Community
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
