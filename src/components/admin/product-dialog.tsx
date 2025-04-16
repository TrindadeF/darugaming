// components/ProductEditForm.tsx
"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import { GenericFormsInput } from "../ui/input/generic"
import { GetProductConfig, productSchema } from "@/schemas/product"
import { z } from "zod"

interface ProductEditFormProps {
    product: Product
}

export function ProductEditForm({ product }: ProductEditFormProps) {
    const form = useForm<z.infer<typeof productSchema>>({
        defaultValues: product
    })

    const onSubmit = (data: z.infer<typeof productSchema>) => {
        // Implemente a submissão para sua API
        console.log("Dados atualizados:", data)
        // Exemplo:
        // await updateProduct(product.id, data)
        // toast.success("Produto atualizado!")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-h-[80vh] overflow-y-auto">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <GenericFormsInput fieldConfig={GetProductConfig()} variants="single" />

                <div className="flex justify-end gap-4 mt-6">
                    <Button type="submit">Salvar alterações</Button>
                </div>
            </form>
        </Form>
    )
}