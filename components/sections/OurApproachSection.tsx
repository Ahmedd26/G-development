import SectionTitle from "@/components/ui/SectionTitle";
import Stack from "@/components/ui/Stack";
import Accordion, {
  type AccordionData,
} from "@/components/ui/Accordion/Accordion";

const data: AccordionData[] = [
  {
    heading: "Location",
    content:
      "Location serves as the foundation upon which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing you the best of every neighborhood.",
  },
  {
    heading: "Design",
    content:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
  {
    heading: "construction",
    content:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
  {
    heading: "End-to-End Service",
    content:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
];

export default function OurApproachSection() {
  return (
    <Stack className="mx-auto max-w-container px-4 py-10">
      <SectionTitle>Our approach</SectionTitle>
      <div className="">
        <Accordion data={data} />
      </div>
    </Stack>
  );
}
