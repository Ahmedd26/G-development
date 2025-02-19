import styles from "@/components/Navbar/Navbar.module.css";
interface BurgerMenuToggleProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (update: (current: boolean) => boolean) => void;
}

function BurgerMenuToggle({
    isMenuOpen,
    setIsMenuOpen,
}: BurgerMenuToggleProps) {
    return (
        <button
            className={`md:hidden ${styles.navTrigger} ${
                isMenuOpen ? styles.activeBurgerMenu : ""
            } pr-4`}
            onClick={() => setIsMenuOpen((cur: boolean) => !cur)}
            aria-label="Toggle navigation"
        >
            <i className="bg-white rounded-sm transition-all"></i>
            <i className="bg-white rounded-sm my-0.5 transition-all"></i>
            <i className="bg-white rounded-sm transition-all"></i>
        </button>
    );
}

export default BurgerMenuToggle;
