import { TailwindClass } from "@/types/tailwind";
import Image, { StaticImageData } from "next/image";

interface CarouselCardProps {
  image: StaticImageData;
  name: string;
  role: string;
  className?: TailwindClass;
}
export default function CarouselCard({ image, name, role }: CarouselCardProps) {
  return (
    <article className="relative aspect-square w-full min-w-80 bg-[#F6F6F6] sm:w-80 lg:w-[517px]">
      <Image src={image} alt="person" className="object-cover" fill />
      <div className="absolute bottom-0 left-0 right-0 m-4 bg-white p-7">
        <h3 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]">
          {name}
        </h3>
        <h4 className="text-lg font-medium sm:text-xl">{role}</h4>
      </div>
    </article>
  );
}
