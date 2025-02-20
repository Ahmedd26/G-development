import Stack from "@/components/ui/Stack";
import { TailwindClass } from "@/types/tailwind";
import SectionTitle from "@/components/ui/SectionTitle";

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
        <SectionTitle>{title}</SectionTitle>
        <p className="text-[28px] font-medium leading-9 sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]">
          {content}
        </p>
      </Stack>
    </div>
  );
}
