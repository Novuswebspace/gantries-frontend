"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { RegisterSchema } from "@/lib/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAxios } from "@/hooks/use-axios";
import Spinner from "@/components/globals/spinner";

export default function SignUpPage() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
  });

  const { loading, mutate } = useAxios();

  const onSubmit = async (values: RegisterSchema) => {
    const { data, error } = await mutate("post", "/auth/register", values);
    if (error) {
      toast.error(error);
      return;
    } else if (data) {
      console.log(data);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="hidden md:block w-1/2">
        <Image
          src="/images/nature.jpg"
          alt="bg"
          height={1000}
          width={1000}
          className="h-screen object-cover w-full"
        />
      </div>
      <div className="w-full md:w-1/2 overflow-y-scroll">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8 p-6"
          >
            <h1 className="text-2xl font-semibold text-center text-primary">
              Welcome To Gantries
            </h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Lastname</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter lastname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-3">
              <FormDescription className="text-sm">
                By creating an account, you agree to the Terms of use and
                Privacy Policy.{" "}
              </FormDescription>
              <Button
                disabled={loading}
                type="submit"
                className="border border-primary rounded-full bg-transparent text-primary hover:text-white"
              >
                {loading ? <Spinner /> : "Create an account"}
              </Button>
              <FormDescription className="text-sm text-center">
                Already have an ccount?{" "}
                <Link href={"/sign-in"} className="text-primary underline">
                  Log in
                </Link>
              </FormDescription>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
