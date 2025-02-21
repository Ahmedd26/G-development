import Link from "next/link";

const links = [
  {
    label: "About us",
    href: "/",
  },
  {
    label: "Our Communities",
    href: "/",
  },
  {
    label: "Latest Updates",
    href: "/",
  },
  {
    label: "Careers",
    href: "/",
  },
  {
    label: "FAQs",
    href: "/",
  },
  {
    label: "Contact us",
    href: "/",
  },
];

export default function FooterNavigation() {
  return (
    <div className="flex items-start justify-between lg:items-center">
      <ul className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-10">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm font-medium md:text-base">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="#hero-section">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2082 28V4.76332M4 15.5196L16 4L28 15.5196"
            stroke="white"
            stroke-width="1.6"
          />
        </svg>
      </Link>
    </div>
  );
}
