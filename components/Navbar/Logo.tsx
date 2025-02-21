import logo from "@/public/logo.png";
import { TailwindClass } from "@/types/tailwind";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className = "",
}: {
  className?: TailwindClass;
}) {
  return (
    <Link href="/" className={className}>
      <Image
        src={logo}
        alt="G Developments Logo"
        className="w-[1em] object-left"
      />
    </Link>
  );
}
