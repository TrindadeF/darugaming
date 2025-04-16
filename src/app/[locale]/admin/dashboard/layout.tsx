import { AppSidebar } from "@/components/admin/nav"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div>
                <SidebarTrigger />
                {children}
            </div>
        </SidebarProvider>
    )
}
