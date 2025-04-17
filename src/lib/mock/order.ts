export const mockOrders: Order[] = [
    {
        _id: "1",
        userId: "user_123",
        number: "ORD-2023-001",
        status: 1,
        type: 0,
        amount: 299.90,
        currency: "BRL",
        items: [
            {
                productId: "prod_123",
                quantity: 1,
                licenseKey: "LIC-123-456"
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    }
]