import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="">
      <Image src={logo} alt="G Developments Logo" className="object-left" />
    </Link>
  );
}
