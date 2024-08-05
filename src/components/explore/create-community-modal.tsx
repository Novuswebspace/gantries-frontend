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

const CommunityFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name cannot be empty")
    .max(25, "Community name cannot be more than 25 characters"),
  description: z
    .string()
    .min(1, "Tell something about this community")
    .max(250, "Description cannot exceed more than 250 characters"),
  tags: z.array(z.string(), { message: "Select any tag" }),
});

type CommunityFormSchema = z.infer<typeof CommunityFormSchema>;

export default function CreateCommunityModal() {
  const form = useForm<CommunityFormSchema>({
    resolver: zodResolver(CommunityFormSchema),
    defaultValues: {
      name: "",
      description: "",
      tags: [],
    },
  });

  const onSubmit = (values: CommunityFormSchema) => {
    console.log(values);
  };
  return (
    <Dialog>
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
