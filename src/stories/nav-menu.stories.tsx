
import { NavMenu } from "@/components/widgets/menu-nav";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavMenu> = {
    title: "Components/Widgets  /NavMenu",
    component: NavMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
    render: () => <NavMenu />,
};

