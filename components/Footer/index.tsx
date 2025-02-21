import FooterNavigation from "@/components/Footer/FooterNavigation";
import FooterSubmenu from "@/components/Footer/FooterSubmenu";
import FooterLegal from "@/components/Footer/FooterLegal";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-container px-4 py-8 lg:py-5">
        <FooterNavigation />
        <FooterSubmenu />
        <FooterLegal />
      </div>
    </div>
  );
}
