"use client";
import Carousel from "@/components/ui/Carousel/Carousel";
import CarouselCard from "@/components/ui/Carousel/CarouselCard";
import person1 from "@/public/images/person-1.png";
import person2 from "@/public/images/person-2.png";
import person3 from "@/public/images/person-3.png";
import person4 from "@/public/images/person-4.png";

const data = [
  {
    image: person1,
    name: "Akram Ziyad",
    role: "Vice President - Strategy",
  },
  {
    image: person2,
    name: "Ahmed Khaled",
    role: "Vice President - Real Estate",
  },
  {
    image: person3,
    name: "Mona Wael",
    role: "Head of People",
  },
  {
    image: person4,
    name: "Samir Wael",
    role: "Head of Operations",
  },
];

export default function OurLeaders() {
  return (
    <div className="mx-auto max-w-container px-4">
      {/* <Carousel data={data} /> */}
      <Carousel
        data={data}
        renderItem={(item) => (
          <CarouselCard image={item.image} name={item.name} role={item.role} />
        )}
      />
    </div>
  );
}
