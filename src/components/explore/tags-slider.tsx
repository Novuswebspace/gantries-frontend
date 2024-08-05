import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TagsSlider() {
  const tags = [
    { id: 1, name: "Tag 1" },
    { id: 2, name: "Tag 2" },
    { id: 3, name: "Tag 3" },
    { id: 3, name: "Tag 3" },
    { id: 3, name: "Tag 3" },
    { id: 3, name: "Tag 3" },
    { id: 3, name: "Tag 3" },
    { id: 3, name: "Tag 3" },
    { id: 3, name: "Tag 3" },
    { id: 3, name: "Tag 3" },
  ];
  return (
    <Carousel
      opts={{
        align: "center",
        direction : "ltr",
        startIndex : 0
      }}
      
      className="w-[70%] lg:w-[85%] bg-white px-4"
    >
      <CarouselContent>
        {tags.map((tag, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="py-2">
              <Link href="/">
                <button
                  className="rounded-full py-1 px-5 bg-primary/10 border border-primary/30 shadow-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                >
                  {tag.name}
                </button>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
