import { TailwindClass } from "@/types/tailwind";
import Link from "next/link";
type link = {
  href: string;
  label: string;
};
interface FooterSubmenuNavigationProps {
  title: string;
  links: link[];
  subtitle?: string;
  className?: TailwindClass;
}
export default function FooterSubmenuNavigation({
  title,
  links,
  subtitle,
  className,
}: FooterSubmenuNavigationProps) {
  return (
    <div className={className}>
      <h3 className="mb-5 text-xs font-normal uppercase tracking-[0.2em] text-[#808080] lg:text-sm">
        {title}
      </h3>

      {subtitle && <h4 className="mb-2 text-base font-light">{subtitle}</h4>}
      <ul className="flex flex-col gap-1 lg:gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm font-medium lg:text-base">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
