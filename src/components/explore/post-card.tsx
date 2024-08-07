import Link from "next/link";
import Image from "next/image";
import {
  CircleArrowDown,
  CircleArrowUp,
  Share2,
  Trash,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Tooltip from "@/components/globals/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AvatarLogo from "../globals/avatar-logo";

type PostCardProps = {
  communityName?: string;
};

const PostCard = () => {
  return (
    <Card className="p-4 flex gap-2.5 md:gap-8 border border-gray-300 shadow-lg rounded-xl">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-3 items-center">
            <CircleArrowUp role="button" />
            <p>3</p>
            <CircleArrowDown role="button" />
          </div>
          <Tooltip content="share">
            <Share2 role="button" size={"1.1rem"} className="text-primary" />
          </Tooltip>
          <Tooltip content="Delete">
            <Trash role="button" size={"1.1rem"} className="text-destructive" />
          </Tooltip>
        </div>
      </div>
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 p-0 text-sm mb-5">
          <div className="flex items-center gap-2">
            <AvatarLogo
              src="/images/nature.jpg"
              alt="Community Logo"
              className="w-8 h-8"
              fallback={<Users className="p-2 bg-primary text-white" />}
            />
            <Link
              href="/"
              className="font-bold hover:underline text-primary text-lg"
            >
              Test
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <p>•&nbsp;By Harsha&nbsp;•</p>
            <p className="text-gray-500">Posted 1 year ago</p>
          </div>
        </div>
        {/* Content */}
        <CardContent className="space-y-4 p-0">
          <div className="h-[30ch]">
            <Image
              src="/images/nature.jpg"
              alt="image"
              height={400}
              width={400}
              className="w-full h-full rounded-xl max-w-xl"
            />
          </div>
          <div className="space-y-3">
            <Link href="/community/communityName/post" className="hover:underline">
              <CardTitle>This is new Post</CardTitle>
            </Link>
            <CardDescription className="text-black text-justify max-w-2xl">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ipsam nobis at similique iure. Quaerat quod, at iste amet hic
                nulla assumenda blanditiis incidunt qui....&nbsp;
              </span>

              <Link href="/" className="hover:underline text-primary">
                Read more
              </Link>
            </CardDescription>
          </div>
        </CardContent>
        {/* <CardFooter className="mt-4 w-full flex justify-start gap-6">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="flex items-center gap-1 text-primary"
          >
            <Share2 size={"1.1rem"} /> Share
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="flex items-center gap-1 text-destructive"
          >
            <Trash size={"1.1rem"} /> Delete
          </Button>
        </CardFooter> */}
      </div>
    </Card>
  );
};

export default PostCard;
