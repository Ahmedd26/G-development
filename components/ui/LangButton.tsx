import { TailwindClass } from "@/types/tailwind";
import { useState } from "react";

interface LangButtonProps {
    className?: TailwindClass;
}
export default function LangButton({ className = "" }: LangButtonProps) {
    // ** Not listed as a required feature, Setup for future implementation. ** //
    const [lang, setLang] = useState<"English" | "العربية">("العربية");
    return (
        <button
            className={`${className} text-white transition-all before:duration-300 ease-in-out relative before:absolute before:h-[1px] before:w-0 hover:before:w-full before:origin-left before:-bottom-0.5 before:-translate-y-1/2 before:bg-white flex items-center gap-1.5`}
            onClick={() => setLang(lang === "English" ? "العربية" : "English")}
        >
            <span>{lang}</span>

            <svg
                aria-hidden
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 0C3.84091 0 0.5 3.34091 0.5 7.5C0.5 11.6591 3.84091 15 8 15C12.1591 15 15.5 11.6591 15.5 7.5C15.5 3.34091 12.1591 0 8 0ZM13.4545 7.5C13.4545 7.97727 13.3864 8.45455 13.25 8.86364C12.8409 7.84091 12.1591 6.75 11.2045 5.65909L12.4318 4.43182C13.1136 5.31818 13.4545 6.34091 13.4545 7.5ZM4.25 3.75C5.13636 3.75 6.70455 4.29545 8.34091 5.72727L6.15909 7.90909C4.65909 6 4.25 4.43182 4.25 3.75ZM9.77273 7.15909C11.3409 9 11.75 10.5682 11.75 11.25C10.8636 11.25 9.29545 10.7045 7.65909 9.27273L9.77273 7.15909ZM11.0682 3L9.77273 4.29545C8.68182 3.34091 7.59091 2.65909 6.56818 2.25C7.04545 2.11364 7.45455 2.04545 7.93182 2.04545C9.15909 2.04545 10.1818 2.38636 11.0682 3ZM2.54545 7.5C2.54545 7.02273 2.61364 6.54545 2.75 6.13636C3.15909 7.15909 3.84091 8.25 4.79545 9.34091L3.56818 10.5682C2.88636 9.68182 2.54545 8.65909 2.54545 7.5ZM4.93182 12L6.22727 10.7045C7.31818 11.6591 8.40909 12.3409 9.43182 12.75C8.95455 12.8864 8.54545 12.9545 8.06818 12.9545C6.84091 12.9545 5.81818 12.6136 4.93182 12Z"
                    fill="white"
                />
            </svg>
        </button>
    );
}
