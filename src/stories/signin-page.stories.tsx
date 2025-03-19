
import SignIn from '@/app/[locale]/signin/page'
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignIn> = {
    title: "Components/Pages/SignIn",
    component: SignIn,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof SignIn>;

export const Login: Story = {
    render: () => <SignIn />,
};


