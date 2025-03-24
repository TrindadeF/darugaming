'use client';

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../ui/data-table";
import { DataTableColumnHeader } from "../ui/data-table-column-header";

const mockOrders: Order[] = [
    {
        _id: "order_001",
        userId: "user_123",
        number: "ORD-20240321-001",
        status: 1,
        type: 2,
        amount: 199.99,
        currency: "USD",
        quantity: 1,
        items: [
            {
                productId: "prod_001",
                quantity: 2,
                licenseKey: "ABC123-XYZ789",
            },
            {
                productId: "prod_002",
                quantity: 1,
                attribute: "Color: Red",
            },
        ],
        createdAt: new Date("2024-03-20T12:00:00Z"),
        updatedAt: new Date("2024-03-21T15:30:00Z"),
    },
    {
        _id: "order_002",
        userId: "user_456",
        topupId: 98765,
        transactionId: 65432,
        number: "ORD-20240321-002",
        status: 2,
        type: 1,
        topupData: "Top-up for mobile number +123456789",
        amount: 50.0,
        currency: "EUR",
        items: [
            {
                productId: "prod_003",
                quantity: 5,
            },
        ],
        createdAt: new Date("2024-03-21T10:00:00Z"),
    },
];


export const column: ColumnDef<Order>[] = [
    {
        accessorKey: "items",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="items" />
        ),
        accessorFn: (row) => row.items.map(item => item.productId) || "N/A",
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="quantity" />
        ),
        accessorFn: (row) => row.quantity || "N/A",
    },
    {
        accessorKey: "amount",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="amount" />
        ),
        accessorFn: (row) => row.amount || "N/A",
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="status" />
        ),
        accessorFn: (row) => row.status || "N/A",
    },
];
export function OrderPage() {
    return <DataTable data={mockOrders} handleRowClick={() => { }} columns={column} />
}