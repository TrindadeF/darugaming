

import { InfiniteMovingPartners } from "@/components/widgets/infinite-moving-partners";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InfiniteMovingPartners> = {
    title: "Components/Widgets/InfiniteMovingPartners",
    component: InfiniteMovingPartners,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof InfiniteMovingPartners>;

export const Default: Story = {
    render: () => <InfiniteMovingPartners />,
};

