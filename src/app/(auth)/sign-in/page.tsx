"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAxios } from "@/hooks/use-axios";
import Spinner from "@/components/globals/spinner";
import { User } from "@/types";

const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type SignInSchema = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loading, mutate } = useAxios();

  const onSubmit = async (values: SignInSchema) => {
    const { data, error } = await mutate<User>("post", "/auth/login", values);
    if (error) {
      toast.error(error);
    } else if (data) {
      console.log(data);
      toast.success("Successfully signed in!");
    }
  };

  return (
    <div className="h-screen flex bg-purple-50">
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/images/nature.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-[#5f3a9e] bg-opacity-10 flex flex-col justify-center items-center p-12 text-white">
          <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
          <p className="text-xl text-center mb-8">
            Sign in to continue your journey with Gantries by eSamudaay.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 overflow-y-auto flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center text-[#4b2f79] mb-6">
            Sign In to Your Account
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} className="border-[#5f3a9e] focus:border-[#4b2f79]" />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} className="border-[#5f3a9e] focus:border-[#4b2f79]" />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5f3a9e] text-white hover:bg-[#4b2f79] transition duration-300"
              >
                {loading ? <Spinner /> : "Sign In"}
              </Button>
            </form>
          </Form>
          <p className="mt-6 text-center text-[#5f3a9e]">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-[#4b2f79] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
