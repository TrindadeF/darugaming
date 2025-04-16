import { FieldConfig } from "@/components/ui/input/generic"
import { z } from "zod"

export const orderSchema = z.object({
    status: z.number().min(0).max(4, { message: "Status inválido" }),
    type: z.number().min(0).max(2, { message: "Tipo inválido" }),
    amount: z.number().min(0, { message: "Valor inválido" }),
    currency: z.string().optional(),
    items: z.array(z.object({
        productId: z.string(),
        quantity: z.number(),
        licenseKey: z.string().optional(),
        attribute: z.string().optional()
    }))
})

export function GetOrderConfig(): Record<string, FieldConfig<any>> {
    return {
        status: {
            label: "Status",
            placeholder: "0",
            description: "Status atual do pedido",
            inputType: "select",
            options: [
                { value: "0", label: "Pendente" },
                { value: "1", label: "Processando" },
                { value: "2", label: "Completo" },
                { value: "3", label: "Cancelado" },
                { value: "4", label: "Reembolsado" }
            ]
        },
        type: {
            label: "Tipo",
            placeholder: "0",
            description: "Tipo de pedido",
            inputType: "select",
            options: [
                { value: "0", label: "Produto" },
                { value: "1", label: "Recarga" },
                { value: "2", label: "Misto" }
            ]
        },
        amount: {
            label: "Valor Total",
            placeholder: "0.00",
            description: "Valor total do pedido",
            inputType: "number"
        },
        currency: {
            label: "Moeda",
            placeholder: "BRL",
            description: "Moeda utilizada",
            inputType: "text"
        }
    }
}