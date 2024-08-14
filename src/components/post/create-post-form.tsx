"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Trash, Upload } from "lucide-react";
import JoditEditor, { IJoditEditorProps } from "jodit-react";
import { useAxios } from "@/hooks/use-axios";
import { ROUTES } from "@/routes";
import { Post, Tag } from "@/types";
import { slugToString } from "@/util/slug";
import { getMarkdown } from "@/util/markdown";

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
import TagSelector from "@/components/post/tag-selector";
import Spinner from "@/components/globals/spinner";

const CreatePostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  tags: z.array(z.string()).nonempty("At least one tag is required"),
  images: z.array(z.any()).optional(),
});

const editorConfig: IJoditEditorProps["config"] = {
  buttons: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "ul",
    "ol",
    "left",
    "center",
    "right",
    "justify",
  ],
  removeButtons: ["image", "video", "source", "speechRecognize", "print"],
  height: 300,
  editHTMLDocumentMode: true,
};

type CreatePostSchema = z.infer<typeof CreatePostSchema>;

type CreatePostPageProps = {
  communityId: string;
  tags: Tag[];
};
export default function CreatePostPage({
  communityId,
  tags,
}: CreatePostPageProps) {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
      images: [],
    },
  });

  const router = useRouter();
  const params = useParams() as { communityName: string };
  const { loading, loadingMsg, mutate } = useAxios();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImageFiles(fileArray);
      setPreviewImages(fileArray.map((file) => URL.createObjectURL(file)));
      form.setValue("images", fileArray);
    }
  };

  const handleImageRemove = (index: number) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedFiles);
    setPreviewImages(updatedFiles.map((file) => URL.createObjectURL(file)));
    form.setValue("images", updatedFiles);
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const onSubmit = async (values: CreatePostSchema) => {
    console.log(values);

    if (values.images) {
      // Append images
      const formData = new FormData();
      values.images.forEach((image) => {
        formData.append("files", image);
      });

      //upload the images to cloud
      const imgResponse = await mutate<string[]>(
        "post",
        "/upload/multiple",
        formData,
        {
          loadingMsg: "Uploading images....",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (imgResponse.error) {
        toast.error(imgResponse.error);
      } else if (imgResponse.data) {
        toast.success(imgResponse.data.message);
        //update the url's to the values
        values = { ...values, images: imgResponse.data.data };
      }
    }

    //Create new post
    const { data, error } = await mutate<Post>(
      "post",
      "/post",
      { ...values, communityId }, //data
      {
        loadingMsg: "Creating Post....",
      }
    );
    if (error) {
      toast.error(error);
    } else if (data) {
      setPreviewImages([]);
      setImageFiles([]);
      form.reset();
      toast.success(data.message);
      router.replace(
        ROUTES.POST_PAGE(slugToString(params.communityName), data.data._id)
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-[#4b2f79] mb-6">
          Create a New Post
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#5f3a9e]">Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
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
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#5f3a9e]">Content</FormLabel>
                  <FormControl>
                    <JoditEditor
                      value={field.value}
                      onBlur={(newContent) => field.onChange(newContent)}
                      config={editorConfig}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#5f3a9e]">Tags</FormLabel>
                  <TagSelector
                    existingTags={tags.map((tag) => tag.name)}
                    selectedTags={field.value}
                    onTagAdd={(tag) => field.onChange([...field.value, tag])}
                    onTagRemove={(tag) =>
                      field.onChange(field.value.filter((t) => t !== tag))
                    }
                  />
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#5f3a9e]">
                    Upload Images
                  </FormLabel>
                  <FormControl>
                    <>
                      <Button
                        type="button"
                        variant={"outline"}
                        onClick={triggerFileInput}
                        className="w-full flex items-center space-x-2"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload File</span>
                      </Button>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <p className="mt-2 text-sm text-gray-600">
                        {imageFiles.length}{" "}
                        {imageFiles.length === 1 ? "image" : "images"} uploaded
                      </p>
                      {previewImages.length > 0 && (
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          {previewImages.map((src, index) => (
                            <div key={index} className="relative">
                              <Image
                                src={src}
                                alt={`Preview ${index}`}
                                width={400}
                                height={400}
                                className="w-full h-32 object-cover rounded-md"
                              />
                              <button
                                type="button"
                                onClick={() => handleImageRemove(index)}
                                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                              >
                                <Trash className="text-red-500" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <p className="my-2 text-center">{loadingMsg}</p>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5f3a9e] text-white hover:bg-[#4b2f79] transition duration-300"
            >
              {loading ? <Spinner /> : "Create Post"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
