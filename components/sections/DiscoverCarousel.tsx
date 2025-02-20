"use client";
import Carousel from "@/components/ui/Carousel/Carousel";
import CarouselDiscoverCard from "@/components/ui/Carousel/CarouselDiscoverCard";
import image1 from "@/public/images/discover-image-1.jpeg";
import image2 from "@/public/images/discover-image-2.png";
import image3 from "@/public/images/discover-image-3.png";
import image4 from "@/public/images/discover-image-4.jpeg";
const data = [
  {
    image: image1,
    category: "news",
    date: "May 2024",
    title: "G Developments launches Seashell Ras El Hekma",
    content:
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
  {
    image: image2,
    category: "news",
    date: "May 2024",
    title: "G Developments launches Seashell Ras El Hekma",
    content:
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
  {
    image: image3,
    category: "news",
    date: "May 2024",
    title: "G Developments launches Seashell Ras El Hekma",
    content:
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
  {
    image: image4,
    category: "news",
    date: "May 2024",
    title: "G Developments launches Seashell Ras El Hekma",
    content:
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
];

export default function DiscoverCarousel() {
  return (
    <div>
      <Carousel
        data={data}
        renderItem={(item) => (
          <CarouselDiscoverCard
            image={item.image}
            category={item.category}
            date={item.date}
            title={item.title}
            content={item.content}
          />
        )}
      />
    </div>
  );
}
