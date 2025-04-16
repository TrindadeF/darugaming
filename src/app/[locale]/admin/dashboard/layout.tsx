import { AppSidebar } from "@/components/admin/nav"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-screen">
                <SidebarTrigger />
                {children}
            </div>
        </SidebarProvider>
    )
}
