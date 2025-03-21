


import type { Meta, StoryObj } from "@storybook/react";
import { mockItem } from "./cart.stories";
import { Card } from "@/components/product/card";

const meta: Meta<typeof Card> = {
    title: "Components/Widgets/Card",
    component: Card,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => <div className="w-screen h-screen flex items-center justify-center"> <Card product={mockItem[0]} /></div>,
};

