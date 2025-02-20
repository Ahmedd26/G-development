import OverviewCard from "@/components/ui/OverviewCard";
import image1 from "@/public/overview-1.png";
import image2 from "@/public/overview-2.png";
import image3 from "@/public/overview-3.png";

const data = [
  {
    image: image1,
    stat: 9588112,
    title: "Total landbank",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
  },
  {
    image: image2,
    stat: 8,
    title: "Projects",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
  },
  {
    image: image3,
    stat: 60,
    title: "Years of Operations",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
  },
];

export default function StatOverview() {
  return (
    <>
      {data.map((card, index) => (
        <OverviewCard
          key={card.title}
          image={card.image}
          title={card.title}
          stat={card.stat}
          overview={card.overview}
          stackClassName={
            data.length - 1 === index ? "border-b border-design-gray" : ""
          }
        />
      ))}
    </>
  );
}
