import { AppearanceForm } from "@/components/account/apparence-form";
import { Separator } from "@/components/ui/separator";


export default function Page() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Appearance</h3>
                <p className="text-sm text-muted-foreground">
                    Customize the appearance of the app. Automatically switch between day
                    and night themes.
                </p>
            </div>
            <Separator />
            <AppearanceForm />
        </div>
    )
}