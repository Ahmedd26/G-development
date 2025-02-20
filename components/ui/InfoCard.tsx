import Stack from "@/components/ui/Stack";
import { TailwindClass } from "@/types/tailwind";

interface InfoCardProps {
  title: string;
  content: string;
  className?: TailwindClass;
}

export default function InfoCard({
  title,
  content,
  className = "",
}: InfoCardProps) {
  return (
    <div className={`${className} mx-auto max-w-container`}>
      <Stack>
        <h2 className="text-design-gray text-base font-medium capitalize leading-5 sm:text-xl md:text-2xl lg:text-3xl">
          {title}
        </h2>
        <p className="text-[28px] font-medium leading-9 sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]">
          {content}
        </p>
      </Stack>
    </div>
  );
}
