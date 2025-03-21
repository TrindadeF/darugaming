import ProfilePage from '@/app/[locale]/account/page'
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfilePage> = {
    title: "Components/Pages/ProfilePage",
    component: ProfilePage,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
    render: () => <ProfilePage />,
};

