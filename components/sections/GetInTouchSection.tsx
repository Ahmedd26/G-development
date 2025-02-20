import Button from "@/components/ui/Button";

export default function GetInTouchSection() {
  return (
    <div className="mx-auto flex max-w-container flex-col items-start gap-6 px-4 py-10 sm:py-12 md:flex-row md:items-center md:justify-between md:py-16 lg:py-20">
      <h2 className="max-w-[25ch] text-[28px] font-medium leading-9 sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]">
        Are you interested in a property or have any other inquiries?
      </h2>
      <Button
        variant="primary"
        className="flex items-center gap-1"
        theme="dark"
        size="lg"
      >
        <span>Get In Touch</span>
        <span>&rarr;</span>
      </Button>
    </div>
  );
}
