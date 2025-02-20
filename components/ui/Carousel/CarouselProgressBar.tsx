import { TailwindClass } from "@/types/tailwind";

interface CarouselProgressBarProps {
  currentItem: number;
  totalItems: number;
  className?: TailwindClass;
}

export default function CarouselProgressBar({
  currentItem,
  totalItems,
  className = "",
}: CarouselProgressBarProps) {
  // Calculate the width of one segment (in percentage)
  const segmentWidth = 100 / totalItems;
  // Determine the left offset based on the current item (first item at 0%)
  const offset = (currentItem - 1) * segmentWidth;

  return (
    <div
      className={`${className} relative h-0.5 w-full overflow-hidden rounded bg-gray-300`}
    >
      <div
        className="absolute h-full rounded bg-black transition-all duration-200"
        style={{
          left: `${offset}%`,
          width: `${segmentWidth}%`,
        }}
      />
    </div>
  );
}
