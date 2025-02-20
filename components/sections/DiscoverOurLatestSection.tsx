"use client";
import Button from "@/components/ui/Button";
import DiscoverCarousel from "@/components/sections/DiscoverCarousel";

export default function DiscoverOurLatestSection() {
  return (
    <section className="mx-auto max-w-container px-4 py-10">
      <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-medium sm:text-3xl lg:text-[64px]">
          Discover our latest
        </h2>
        <Button
          href="/"
          size="sm"
          theme="dark"
          className="!px-4 !py-2.5 md:!py-2"
        >
          Media Center &rarr;
        </Button>
      </div>
      <DiscoverCarousel />
    </section>
  );
}
