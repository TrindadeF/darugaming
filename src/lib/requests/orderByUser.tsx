import { mockOrders } from "@/app/[locale]/admin/dashboard/orders/page";

export async function ordersByUser(userId: string): Promise<Order[]> {
    // Implementar busca de pedidos na API
    return mockOrders // Retorno mockado
}
