

import { Rating } from "@/components/widgets/rating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Rating> = {
    title: "Components/Widgets/Rating",
    component: Rating,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    render: () => <Rating defaultValue={4} setRating={() => { }} />,
};

