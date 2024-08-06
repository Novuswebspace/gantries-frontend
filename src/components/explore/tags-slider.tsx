import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getAllTags } from "@/service/api-service";
import TagBadge from "./tag-badge";

export default async function TagsSlider() {
  const tags = await getAllTags();
  if (!tags) {
    return null;
  }
  return (
    <Carousel
      opts={{
        align: "center",
        direction: "ltr",
        startIndex: 0,
      }}
      className="w-[70%] lg:w-[85%] bg-white px-4"
    >
      <CarouselContent>
        {tags.map((tag, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="py-2">
              <TagBadge tag={tag} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
