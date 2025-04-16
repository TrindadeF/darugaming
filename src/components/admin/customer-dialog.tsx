'use client';

import { ordersByUser } from "@/lib/requests/orderByUser";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { formatCurrency, getOrderStatus } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetUserConfig, userSchema } from "@/schemas/users";
import { Form } from "../ui/form";
import { GenericFormsInput } from "../ui/input/generic";
import { Button } from "../ui/button";

export function UserOrdersDialog({ userId }: { userId: string }) {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)

    const loadOrders = async () => {
        try {
            const data = await ordersByUser(userId)
            setOrders(data)
        } catch (error) {
            console.error("Erro ao carregar pedidos:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-4">
            {loading ? (
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[180px]" />
                </div>
            ) : orders.length > 0 ? (
                orders.map((order) => (
                    <div key={order._id} className="p-4 border rounded-lg">
                        <div className="flex justify-between">
                            <span className="font-medium">Pedido #{order.number}</span>
                            <span className="text-sm text-muted-foreground">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-sm">Status: {getOrderStatus(order.status)}</p>
                                <p className="text-sm">
                                    Valor: {formatCurrency(order.amount, order.currency)}
                                </p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-sm font-medium">Itens:</p>
                                <ul className="list-disc pl-4">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="text-sm">
                                            {item.quantity}x {item.productId}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-muted-foreground">
                    Nenhum pedido encontrado
                </p>
            )}
        </div>
    )
}


interface UserEditFormProps {
    user: User
}

export function UserEditForm({ user }: UserEditFormProps) {
    const form = useForm<z.infer<typeof userSchema>>({
        defaultValues: {
            ...user,
            status: user.status ?? true
        }
    })

    const onSubmit = (data: z.infer<typeof userSchema>) => {
        // Implementar atualização do usuário
        console.log("Dados atualizados:", data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <GenericFormsInput
                    fieldConfig={GetUserConfig()}
                    variants="single"

                />

                <div className="flex justify-end gap-4 mt-6">
                    <Button type="submit">Salvar Alterações</Button>
                </div>
            </form>
        </Form>
    )
}