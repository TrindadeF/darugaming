import { CookieConsent } from "@/components/widgets/cookie-consent";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CookieConsent> = {
    title: "Components/Widgets/CookieConsent",
    component: CookieConsent,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof CookieConsent>;

export const Default: Story = {
    render: () => <CookieConsent handleCookieConsent={() => { }} />,
};

