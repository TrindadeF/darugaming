import OrderPage from '@/app/[locale]/account/orders/page'
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OrderPage> = {
    title: "Components/Pages/OrderPage",
    component: OrderPage,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof OrderPage>;

export const Default: Story = {
    render: () => <OrderPage />,
};

