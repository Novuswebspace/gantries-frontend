"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { User } from "lucide-react";
import { Comment } from "@/types";
import { useAxios } from "@/hooks/use-axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AvatarLogo from "@/components/globals/avatar-logo";
import moment from "moment";

const CommentFormSchema = z.object({
  text: z.string().min(1, "Comment cannot be empty"),
});

type CommentFormSchema = z.infer<typeof CommentFormSchema>;

const CommentSection = ({
  postId,
  comments: allComments,
}: {
  postId: string;
  comments: Comment[];
}) => {
  const form = useForm<CommentFormSchema>({
    defaultValues: {
      text: "",
    },
    resolver: zodResolver(CommentFormSchema),
  });

  const { loading, mutate } = useAxios();
  const [comments, setComments] = useState<Comment[]>(allComments);

  const onSubmit = async (values: CommentFormSchema) => {
    const { error, data } = await mutate<Comment>(
      "post",
      "/comment",
      { postId, content: values.text },
      { loadingMsg: "Posting comment..." }
    );
    if (error) {
      toast.error(error);
    } else if (data) {
      form.reset();
      toast.success(data.message);
      setComments((prev) => [data.data, ...prev]);
    }
  };

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#5f3a9e]">Add a comment</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={2}
                    placeholder="Add a comment..."
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-end mt-2">
            <Button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Comment"}
            </Button>
          </div>
        </form>
      </Form>
      <hr />
      <div className="overflow-y-auto mt-4 max-h-[700px]">
        <div className="sticky top-[5.5rem] space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="p-2 border border-gray-300 rounded-md shadow space-y-2 capitalize"
            >
              <div className="flex items-center gap-2">
                <AvatarLogo
                  src="/images/nature.jpg"
                  alt="user"
                  className=""
                  fallback={<User size={"1.1rem"} />}
                />
                <h4 className="font-semibold">{comment.createdBy.username}</h4>
                <span>•</span>
                <span className="text-sm text-gray-600">
                  {moment(comment.createdAt).fromNow()}
                </span>
              </div>
              <p className="text-[0.95rem] px-8 text-justify">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
