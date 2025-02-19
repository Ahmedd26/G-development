interface MobileMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}
export default function MobileMenu({
    isMenuOpen,
    setIsMenuOpen,
}: MobileMenuProps) {
    return (
        <div
            className={`md:hidden absolute left-0 w-full bg-[#111] transition-all duration-400 overflow-hidden ${
                isMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
        >
            <ul className="px-4 py-6">
                {["About", "Portfolio", "Services", "Contact"].map((item) => (
                    <li key={item} className="w-full text-right mb-4 last:mb-0">
                        <a
                            href="#"
                            className="block text-white text-2xl p-4 hover:text-[#00E676] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
