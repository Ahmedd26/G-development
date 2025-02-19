import Button from "@/components/ui/Button";
import LangButton from "../ui/LangButton";

export default function DesktopMenu() {
    return (
        <div className="hidden md:flex h-full">
            <ul className="flex items-center md:gap-1 lg:gap-3">
                <li>
                    <Button variant="secondary" size="sm" href="/">
                        Our communities
                    </Button>
                </li>
                <li>
                    <Button variant="secondary" size="sm" href="/">
                        Latest updates
                    </Button>
                </li>
                <li>
                    <LangButton />
                </li>
                <li>
                    <Button variant="primary" theme="light" size="lg" href="/">
                        Get In Touch
                    </Button>
                </li>
            </ul>
        </div>
    );
}
