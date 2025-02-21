import Image from "next/image";
import heroImg from "@/public/hero-image.png";
export default function HeroSection() {
  return (
    <header
      id="hero-section"
      className="relative min-h-dvh shadow-inner shadow-black"
    >
      <Image
        src={heroImg}
        fill
        className="-z-10 object-cover"
        alt="Our headquarter image"
      />
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <div className="mx-auto mb-[100px] max-w-container px-4">
          <h1 className="mb-6 text-[40px] font-medium leading-[50px] text-white md:text-[120px] md:leading-[150px]">
            About us
          </h1>
          <p className="text-2xl font-medium text-white md:max-w-[40%] md:text-[28px]">
            Real Estate developer blending timeless design with comfortable
            living.
          </p>
        </div>
      </div>
    </header>
  );
}
