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
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { authenticate } from "@/store/features/auth-slice";
import { ROUTES } from "@/routes";
import { ArrowLeft } from "lucide-react";

const SignUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().length(10, { message: "Invalid Phone Number" }),
  firstname: z.string().min(2, { message: "First name is required" }),
  lastname: z.string().min(2, { message: "Last name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type SignUpSchema = z.infer<typeof SignUpSchema>;

export default function SignUpPage() {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      phone: "",
    },
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, mutate } = useAxios();

  const onSubmit = async (values: SignUpSchema) => {
    const { data, error } = await mutate<User>(
      "post",
      "/auth/register",
      values
    );
    if (error) {
      toast.error(error);
    } else if (data) {
      dispatch(authenticate(data.data));
      router.replace(ROUTES.VERIFY);
      toast.success("Account created successfully!");
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
          <h1 className="text-4xl font-bold mb-6">Gantries by eSamudaay</h1>
          <p className="text-xl text-center mb-8">
            Join our community of young entrepreneurs building great businesses.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 overflow-y-scroll grid place-items-center">
        <div className="w-full max-w-md py-4">
          <h2 className="relative text-center text-3xl font-semibold text-primary mb-6">
            <Button size={'icon'} className="absolute left-0 bg-gray-100 hover:bg-gray-300 text-primary" onClick={() => router.push(ROUTES.HOME)} >
              <ArrowLeft size={'1.1rem'} />
            </Button>
            <span>
              Create New Account
            </span>
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">First Name</FormLabel>
                    <FormControl>
                      <Input
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
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">Last Name</FormLabel>
                    <FormControl>
                      <Input
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
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
                {loading ? <Spinner /> : "Create Account"}
              </Button>
            </form>
          </Form>
          <p className="mt-6 text-center text-[#5f3a9e]">
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGNIN}
              className="text-[#4b2f79] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
