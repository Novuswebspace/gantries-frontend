"use client";

import { useParams } from 'next/navigation';
import CommentSection from '@/components/CommentSection';
import PostCard from '@/components/explore/post-card';

const PostPage = () => {
  const { postId } = useParams();

  // Define the post details. In a real application, this might come from a CMS or database
  const post = {
    id: postId,
    title: "This is new Post",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam nobis at similique iure. Quaerat quod, at iste amet hic nulla assumenda blanditiis incidunt qui.",
    image: "/mnt/data/Screenshot 2024-08-07 at 6.01.49 PM.png",
    author: "Harsha",
    date: "Posted 1 year ago",
  };

  return (
    <main className="min-h-screen bg-gray-100/50">
      <div className="flex max-w-screen-xl mx-auto w-full py-8">
        <div className="w-3/4 pr-8">
          {/* Use the PostCard component */}
          <PostCard />
          <CommentSection postId={post.id as string} />
        </div>
      </div>
    </main>
  );
};

export default PostPage;
