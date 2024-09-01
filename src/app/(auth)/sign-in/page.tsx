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
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/store";
import { authenticate } from "@/store/features/auth-slice";
import { ROUTES } from "@/routes";
import { ArrowLeft } from "lucide-react";

const SignInSchema = z.object({
  phone: z.string().length(10, "Invalid Phone Number"),
  password: z.string().min(1, { message: "Password is required" }),
});

type SignInSchema = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { loading, mutate } = useAxios();

  const callbackUrl = searchParams.get("callback");

  const onSubmit = async (values: SignInSchema) => {
    const { data, error } = await mutate<User>("post", "/auth/login", values);
    if (error) {
      toast.error(error);
      if (error.includes("not verified")) {
        return router.replace(`/verify?phone=${values.phone}`);
      }
    } else if (data) {
      dispatch(authenticate(data.data));
      toast.success(data.message);
      router.replace(callbackUrl ?? ROUTES.EXPLORE);
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
        <div className="absolute inset-0 bg-[#5f3a9e] bg-opacity-10 flex flex-col justify-center items-center p-12 text-white tracking-in-expand">
          <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
          <p className="text-xl text-center mb-8">
            Sign in to continue your journey with Gantries by eSamudaay.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 overflow-y-auto flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="relative text-center text-3xl font-semibold text-primary mb-6">
            <Button size={'icon'} className="absolute left-0 bg-gray-100 hover:bg-gray-300 text-primary" onClick={() => router.push(ROUTES.HOME)} >
              <ArrowLeft size={'1.1rem'} />
            </Button>
            <span>
              Sign In to Your Account
            </span>
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="border-[#5f3a9e] focus:border-[#4b2f79]"
                      />
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
                      <Input
                        type="password"
                        {...field}
                        className="border-[#5f3a9e] focus:border-[#4b2f79]"
                      />
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
            <Link
              href={ROUTES.SIGNUP}
              className="text-[#4b2f79] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
