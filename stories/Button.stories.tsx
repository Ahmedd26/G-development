import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "@/components/ui/Button";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        buttonText: { control: "text" },
        href: { control: "text" },
        variant: { control: "select", options: ["primary", "secondary"] },
        size: { control: "select", options: ["sm", "lg"] },
        theme: { control: "select", options: ["light", "dark"] },
    },
    args: {
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const NavCTA: Story = {
    args: {
        buttonText: "Hello!",
        href: "/",
        variant: "primary",
        size: "lg",
        theme: "light",
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};
export const NavLinks: Story = {
    args: {
        buttonText: "Hello!",
        href: "/",
        variant: "secondary",
        size: "sm",
        theme: "light",
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};
export const SectionsCTA: Story = {
    args: {
        buttonText: "Hello!",
        href: "/",
        variant: "primary",
        size: "sm",
        theme: "dark",
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>;
    },
};
