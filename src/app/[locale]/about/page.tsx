import { BackgroundWrapper } from "@/components/bg-wrapper";
import { AboutPage } from "@/components/external/about/page";
import { ColorProvider } from "@/components/providers/color";


export default function Page() {
    return (
        <ColorProvider>
            <BackgroundWrapper>
                <AboutPage />
            </BackgroundWrapper>
        </ColorProvider>
    );
}