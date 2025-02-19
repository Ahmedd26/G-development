import { TailwindClass } from "@/types/tailwind";
import Link from "next/link";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
    variant?: "primary" | "secondary";
    theme?: "light" | "dark";
    size?: "sm" | "lg";
    className?: TailwindClass;
    href?: string;
    onClick?: () => void;
}>;

export default function Button({
    variant = "primary",
    theme = "light",
    size = "sm",
    className = "",
    href,
    children,
    onClick,
}: ButtonProps) {
    const baseClasses =
        "transition-colors duration-150 rounded-full leading-6 text-base font-medium inline-flex items-center justify-center";

    const variants = {
        primary: {
            light: "bg-white text-black hover:bg-[#f2f2f2]",
            dark: "bg-black text-white hover:bg-[#484848]",
        },
        secondary:
            "bg-transparent text-white border border-transparent hover:border-white",
    };

    const sizes = {
        sm: "py-1 px-2 sm:py-2 sm:px-4",
        lg: "py-1.5 px-3 sm:py-3 sm:px-6",
    };

    const variantClasses =
        variant === "primary" ? variants.primary[theme] : variants.secondary;

    const sizeClasses = sizes[size];

    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
}
