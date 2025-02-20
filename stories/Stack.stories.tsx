import { Meta, StoryObj } from "@storybook/react";
import Stack from "@/components/ui/Stack";
import React, { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Stack> & {
  firstItemText: string;
  secondItemText: string;
};

const meta: Meta<StoryProps> = {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    firstItemText: { control: "text" },
    secondItemText: { control: "text" },
  },
  args: {
    firstItemText: "Item 1",
    secondItemText: "Item 2",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: ({ firstItemText, secondItemText, ...args }) => (
    <Stack {...args}>
      <div className="rounded bg-blue-500 p-4 text-white">{firstItemText}</div>
      <div className="rounded bg-green-500 p-4 text-white">
        {secondItemText}
      </div>
    </Stack>
  ),
};
