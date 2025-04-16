import { ReactNode } from "react";
import { useForm, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetDescription,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ZodSchema, z } from "zod";

type SheetFormProps<T extends ZodSchema<any>> = {
    title: string;
    schema: T;
    children: ReactNode;
    onSubmit: (values: z.infer<T>) => void;
    triggerLabel: ReactNode | string;
    defaultValues?: DefaultValues<z.infer<T>>;
};

export function SheetForm<T extends ZodSchema<any>>({
    title,
    schema,
    children,
    onSubmit,
    triggerLabel,
    defaultValues,
}: SheetFormProps<T>) {
    const form = useForm<z.infer<T>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>{triggerLabel}</Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto p-4">
                <SheetTitle>{title}</SheetTitle>
                <SheetDescription>Preêncha o formulário abaixo</SheetDescription>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 py-4"
                    >
                        {children}
                        <Button className="w-full" type="submit">
                            Criar
                        </Button>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}