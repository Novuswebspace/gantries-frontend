"use client";

import Image from "next/image";
import moment from "moment";
import AsyncSelect from "react-select/async";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import axios from "@/lib/axios";
import { useAppSelector } from "@/store";
import { ROUTES } from "@/routes";
import { College, Student } from "@/types";
import { useAxios } from "@/hooks/use-axios";
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
import Spinner from "@/components/globals/spinner"

const BasicInfoSchema = z.object({
  college: z
    .string()
    .min(3, { message: "College name must be at least 3 characters long" }),
  course: z.string().min(1, { message: "Course is required" }),
  yearOfEnding: z.string().min(4, { message: "Year is required" }),
  reasonForJoining: z
    .string()
    .min(10, {
      message:
        "Reason must be at least 10 characters long and not a single word",
    })
    .refine((value) => value.trim().split(" ").length > 1, {
      message: "Reason must be more than one word",
    }),
  plan: z.string().min(1, { message: "Plan is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
});

type BasicInfoSchema = z.infer<typeof BasicInfoSchema>;

export default function BasicInfoPage() {
  const router = useRouter();
  const form = useForm<BasicInfoSchema>({
    resolver: zodResolver(BasicInfoSchema),
    defaultValues: {
      college: "",
      course: "",
      yearOfEnding: "",
      reasonForJoining: "",
      plan: "",
      dateOfBirth: "",
    },
  });

  const { loading, mutate } = useAxios();
  const { data: user } = useAppSelector((state) => state.auth);
  const [inputValue, setInputValue] = useState("");

  const fetchColleges = async (
    inputValue: string,
    callback: (options: { label: string; value: string }[]) => void
  ): Promise<{ label: string; value: string }[]> => {
    if (!inputValue) {
      callback([]);
      return [];
    }

    try {
      const response = await axios.get<College[]>("/college", {
        params: { query: inputValue },
      });

      const options = response.data.map((college) => ({
        label: `${college.collegeName}, ${college.district}, ${college.state}`,
        value: college.collegeName, // Use collegeName as the value
      }));

      // Add user-entered option to the list if it doesn't exist
      if (
        !options.find(
          (option) => option.label.toLowerCase() === inputValue.toLowerCase()
        )
      ) {
        options.push({
          label: `Use "${inputValue}" as college name`,
          value: inputValue,
        });
      }

      callback(options);
      return options;
    } catch (error) {
      console.error("Error fetching colleges:", error);
      callback([
        { label: `Use "${inputValue}" as college name`, value: inputValue },
      ]);
      return [
        { label: `Use "${inputValue}" as college name`, value: inputValue },
      ];
    }
  };
  const onSubmit = async (values: BasicInfoSchema) => {
    const dateOfBirth = moment(new Date(values.dateOfBirth)).format(
      "DD-MM-YYYY"
    );
    console.log({ ...values, dateOfBirth });

    const obj = {
      ...values,
      user_id: user?._id,
      dateOfBirth,
      aim: values.reasonForJoining,
    };
    console.log(obj);
    
    const { data, error } = await mutate<Student>(
      "post",
      "/user/basic-info",
      obj
    );
    if (error) {
      toast.error(error);
    } else if (data) {
      toast.success(data.message);
      router.replace(ROUTES.EXPLORE);
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
          <h1 className="text-4xl font-bold mb-6">Welcome</h1>
          <p className="text-xl text-center mb-8">
            Please provide your details to join Gantries by eSamudaay.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 overflow-y-auto grid place-items-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center text-[#4b2f79] mb-6">
            Let us Know more about you
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="college"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">College</FormLabel>
                    <FormControl>
                      <AsyncSelect
                        cacheOptions
                        defaultOptions
                        loadOptions={fetchColleges}
                        onInputChange={(value) => setInputValue(value)}
                        onChange={
                          (option: any) => field.onChange(option?.value) // Use value to store the college name
                        }
                        placeholder="Search your College"
                        noOptionsMessage={() => "Type to search"}
                        className="border-[#5f3a9e] focus:border-[#4b2f79]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">Course</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Course Name"
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
                name="yearOfEnding"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">
                      Year of ending of Course
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Year"
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
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="date" className="text-primary">
                      Date of birth
                    </FormLabel>
                    <FormControl className="w-full">
                      <Input id="date" type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reasonForJoining"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">
                      Why are you joining Gantries?
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Reason"
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
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5f3a9e]">Your Plan</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Plan"
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
                {loading ? <Spinner /> : "Save"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
