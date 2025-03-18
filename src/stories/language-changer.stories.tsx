
import LanguageChanger from "@/components/language-changer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LanguageChanger> = {
    title: "Components/Widgets/LanguageChanger",
    component: LanguageChanger,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof LanguageChanger>;

export const Default: Story = {
    render: () => <LanguageChanger />,
};

