import { TailwindClass } from "@/types/tailwind";

interface CircularButtonProps {
  arrowDirection: "left" | "right";
  onClick: () => void;
  className?: TailwindClass;
}
export default function CircularButton({
  arrowDirection,
  onClick,
  className = "",
}: CircularButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${arrowDirection === "right" ? "rotate-180" : ""} ${className} rounded-full bg-black p-4 transition-colors duration-200 hover:bg-[#484848]`}
    >
      <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 10.1561H1.57249M9.63969 1L1 10L9.63969 19"
          stroke="white"
        />
      </svg>
    </button>
  );
}
