import {
    Home,
    Users,
    Package,
    DollarSign,
    Mail,
    Key,
    Settings
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const mainItems = [
    {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: Home,
    },
    {
        title: "Customers",
        url: "/admin/dashboard/customers",
        icon: Users,
    },
    {
        title: "Products",
        url: "/admin/dashboard/products",
        icon: Package,
    },
    {
        title: "Orders",
        url: "/admin/dashboard/orders",
        icon: DollarSign,
    },
    {
        title: "Contact",
        url: "/admin/dashboard/contact",
        icon: Mail,
    },
]

const managementItems = [
    {
        title: "Auth",
        url: "/admin/auth",
        icon: Key,
    },
    {
        title: "Settings",
        url: "/admin/settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {mainItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {managementItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}