'use client';

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../ui/data-table/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { OrderEditForm } from "./order-dialog";
export const orderColumns: ColumnDef<Order>[] = [
    {
        accessorKey: "number",
        header: "Número do Pedido",
    },
    {
        accessorKey: "userId",
        header: "ID do Usuário",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const statusMap: Record<number, string> = {
                0: "Pendente",
                1: "Processando",
                2: "Completo",
                3: "Cancelado",
                4: "Reembolsado"
            }
            return statusMap[row.getValue("status") as number]
        }
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row }) => {
            const typeMap: Record<number, string> = {
                0: "Produto",
                1: "Recarga",
                2: "Misto"
            }
            return typeMap[row.getValue("type") as number]
        }
    },
    {
        accessorKey: "amount",
        header: "Valor Total",
        cell: ({ row }) => new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: row.original.currency || "BRL",
        }).format(row.getValue("amount"))
    },
    {
        accessorKey: "items",
        header: "Itens",
        cell: ({ row }) => `${row.original.items.length} itens`
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const order = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>

                        <Dialog>
                            <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    Editar Status
                                </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                    <DialogTitle>Editar Pedido #{order.number}</DialogTitle>
                                </DialogHeader>
                                <OrderEditForm order={order} />
                            </DialogContent>
                        </Dialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
export function OrderTable(props: { data: Order[] }) {
    return (
        <DataTable
            data={props.data}
            columns={orderColumns}
        />
    )
}