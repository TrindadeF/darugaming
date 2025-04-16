import { Mail } from "@/components/admin/contact/mail"
import { getTickets } from "@/lib/requests/getTickets"
import { cookies } from "next/headers"




export default async function MailPage() {
    const layout = (await cookies()).get("react-resizable-panels:layout:mail")
    const tickets = await getTickets()
    const defaultLayout = layout ? JSON.parse(layout.value) : undefined
    return (
        <div className="flex-col w-full">
            <Mail
                mails={tickets}
                defaultLayout={defaultLayout}
            />
        </div>
    )
}