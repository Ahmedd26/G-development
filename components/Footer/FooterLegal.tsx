import Link from "next/link";

export default function FooterLegal() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:justify-between md:pt-5">
      <div className="flex flex-col gap-2 md:flex-row-reverse md:justify-start md:gap-10">
        <div className="flex items-center gap-3 md:gap-10">
          <Link href="/" className="text-xs font-normal md:text-base">
            Privacy
          </Link>
          <Link href="/" className="text-xs font-normal md:text-base">
            Terms & Conditions
          </Link>
        </div>
        <h5 className="text-xs font-normal text-[#808080] md:text-base">
          &copy; {new Date().getFullYear()} G Developments. All rights reserved.
        </h5>
      </div>
      <span className="text-xs font-normal md:text-base">
        Website by Mitch Designs
      </span>
    </div>
  );
}
