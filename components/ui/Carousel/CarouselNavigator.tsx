import CircularButton from "@/components/ui/CircularButton";

interface CarouselNavigatorProps {
  previousItem: () => void;
  nextItem: () => void;
}

export default function CarouselNavigator({
  previousItem,
  nextItem,
}: CarouselNavigatorProps) {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between 2xl:w-[calc(100%+52px)]">
      <CircularButton arrowDirection="left" onClick={previousItem} />
      <CircularButton arrowDirection="right" onClick={nextItem} />
    </div>
  );
}
