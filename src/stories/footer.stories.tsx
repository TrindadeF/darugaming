
import { Footer } from "@/components/widgets/footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
    title: "Components/Widgets/Footer",
    component: Footer,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    render: () => <Footer />,
};

