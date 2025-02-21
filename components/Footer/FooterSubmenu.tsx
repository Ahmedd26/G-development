import Image from "next/image";
import FooterSubmenuNavigation from "@/components/Footer/FooterSubmenuNavigation";
import logo from "@/public/logo-footer.png";
import Link from "next/link";
const contactLinks = [
  {
    label: "info@gdevelopments.com",
    href: "mailto:info@gdevelopments.com",
  },
  {
    label: "16738",
    href: "tel:16738",
  },
];
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gdevelopments",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/gdevelopments",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gdevelopments",
  },
];

export default function FooterSubmenu() {
  return (
    <div className="flex flex-col gap-10 pb-5 pt-10 md:flex-row md:items-end md:justify-between md:gap-[60px]">
      <Link href="/">
        <Image src={logo} alt="G Developments Logo" className="object-left" />
      </Link>
      <div className="flex flex-col gap-[60px] lg:basis-[420px]">
        <FooterSubmenuNavigation
          title="Interest form"
          subtitle="Looking for something specific?"
          links={[{ label: "Submit Your Interest →", href: "/" }]}
        />
        <div className="flex items-start justify-between gap-3 sm:justify-start sm:gap-16 lg:gap-5">
          <FooterSubmenuNavigation title="Social" links={socialLinks} />
          <FooterSubmenuNavigation title="Contact info" links={contactLinks} />
        </div>
      </div>
    </div>
  );
}
