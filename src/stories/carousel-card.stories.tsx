import type { Meta, StoryObj } from "@storybook/react";
import { mockItem } from "./cart.stories";
import { ProductGallery } from "@/components/product/gallery";



const meta: Meta<typeof ProductGallery> = {
    title: "Components/Widgets/ProductGallery",
    component: ProductGallery,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof ProductGallery>;

export const Default: Story = {
    render: () => <ProductGallery items={mockItem} title="Muito foda" description="uma descrição irada" />,
};

