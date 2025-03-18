
import { GlobalSearch } from "@/components/widgets/global-search";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GlobalSearch> = {
    title: "Components/Widgets/GlobalSearch",
    component: GlobalSearch,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof GlobalSearch>;

export const Default: Story = {
    render: () => <GlobalSearch />,
};

