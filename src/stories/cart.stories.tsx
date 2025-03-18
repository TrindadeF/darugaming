


import { Cart } from "@/components/ui/cart";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Cart> = {
    title: "Components/Widgets/Cart",
    component: Cart,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Cart>;

export const Default: Story = {
    render: () => <Cart />,
};

