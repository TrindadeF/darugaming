import { mockOrders } from "../mock/order";


export async function ordersByUser(userId: string): Promise<Order[]> {
    // Implementar busca de pedidos na API
    return mockOrders // Retorno mockado
}
