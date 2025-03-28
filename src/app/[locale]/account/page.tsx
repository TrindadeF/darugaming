


import { ProfileForm } from "@/components/account/profile-form"
import { Separator } from "../../../components/ui/separator"

export default function Page() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    Configure your account.
                </p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
    )
}