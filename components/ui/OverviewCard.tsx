import Stack from "@/components/ui/Stack";
import { TailwindClass } from "@/types/tailwind";
import Image, { StaticImageData } from "next/image";

interface InfoCardProps {
  image: StaticImageData;
  stat: number | string;
  title: string;
  overview: string;
  className?: TailwindClass;
  stackClassName?: TailwindClass;
}

export default function OverviewCard({
  image,
  stat,
  title,
  overview,
  className = "",
  stackClassName = "",
}: InfoCardProps) {
  return (
    <div className={`${className} mx-auto max-w-container px-4`}>
      <Stack className={`${stackClassName} border-design-gray border-t py-10`}>
        <div className="relative">
          <Image
            src={image}
            alt={`${title} image`}
            className="aspect-[2/1] max-w-[200px] object-cover sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
          />
        </div>
        <div className="">
          <h3 className="mb-1 text-[28px] font-medium leading-9 sm:mb-1.5 md:mb-2 lg:mb-3 lg:text-[40px] lg:leading-[50px]">
            {stat.toLocaleString()}
          </h3>
          <h2 className="text-design-gray mb-3 text-2xl font-medium sm:mb-6 sm:text-xl md:mb-8 md:text-2xl lg:mb-14 lg:text-3xl">
            {title}
          </h2>
          <p className="text-sm text-black sm:text-base md:text-lg">
            {overview}
          </p>
        </div>
      </Stack>
    </div>
  );
}
