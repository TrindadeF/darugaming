import { GetOrderConfig, orderSchema } from "@/schemas/order"

import { z } from "zod"
import { Form } from "../ui/form"
import { GenericFormsInput } from "../ui/input/generic"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"


interface OrderEditFormProps {
    order: Order
}

export function OrderEditForm({ order }: OrderEditFormProps) {
    const form = useForm<z.infer<typeof orderSchema>>({
        defaultValues: order
    })

    const onSubmit = (data: z.infer<typeof orderSchema>) => {
        // Implementar atualização do pedido
        console.log("Dados atualizados:", data)
        // Exemplo: await updateOrder(order._id, data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <GenericFormsInput
                    fieldConfig={GetOrderConfig()}
                    variants="single"
                />

                <div className="flex justify-end gap-4 mt-6">
                    <Button type="submit">Atualizar Pedido</Button>
                </div>
            </form>
        </Form>
    )
}