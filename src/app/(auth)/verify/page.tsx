"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useAxios } from "@/hooks/use-axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
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
import Spinner from "@/components/globals/spinner";
import { ROUTES } from "@/routes";

const VerifyOTPSchema = z.object({
  otp: z.string().length(6, {
    message: "Your one-time password must be 6 digits.",
  }),
});

type VerifyOTPSchema = z.infer<typeof VerifyOTPSchema>;

const VerifyOTPPage = () => {
  const router = useRouter();
  const { loading, mutate } = useAxios();

  const form = useForm<VerifyOTPSchema>({
    resolver: zodResolver(VerifyOTPSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: VerifyOTPSchema) => {
    const { data, error } = await mutate("post", "/auth/verify", values);
    if (error) {
      toast.error(error);
    } else if (data) {
      toast.success(data.message);
      router.replace(ROUTES.BASIC_INFO);
    }
  };

  return (
    <div className="h-screen flex bg-purple-50">
      <div className="w-full relative">
        <Image
          src="/images/nature.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-[#5f3a9e] bg-opacity-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="w-full max-w-md p-8 border border-gray-200 rounded-xl shadow-xl bg-white text-primary">
            <h2 className="text-3xl font-semibold text-[#4b2f79] mb-6">
              Verify Phone Number
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="mx-auto">
                      <FormLabel>One Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription>
                        Please enter the one-time password sent to your phone.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#5f3a9e] text-white hover:bg-[#4b2f79] transition duration-300"
                >
                  {loading ? <Spinner /> : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPPage;
