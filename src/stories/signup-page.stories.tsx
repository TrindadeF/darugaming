
import SignUp from '@/app/[locale]/signup/page'
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignUp> = {
    title: "Components/Pages/SignUp",
    component: SignUp,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof SignUp>;

export const Register: Story = {
    render: () => <SignUp />,
};


