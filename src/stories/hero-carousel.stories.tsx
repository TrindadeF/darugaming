

import { BackgroundWrapper } from "@/components/bg-wrapper";
import { ThemeProvider } from "@/components/providers/color";
import { HeroCarousel } from "@/components/widgets/hero-carousel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeroCarousel> = {
    title: "Components/Widgets/HeroCarousel",
    component: HeroCarousel,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {
    render: () =>
        <ThemeProvider>
            <BackgroundWrapper>
                <HeroCarousel />
            </BackgroundWrapper>
        </ThemeProvider>,
};

