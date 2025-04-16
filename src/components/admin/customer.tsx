'use client';

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { UserEditForm, UserOrdersDialog } from "./customer-dialog";
import { deleteUser } from "@/lib/requests/deleteUser";
import { DataTable } from "../ui/data-table/table";
import { format } from "date-fns";

export const userColumns: ColumnDef<User>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "balance",
        header: "Saldo",
        cell: ({ row }) => new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(row.getValue("balance"))
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => row.getValue("status") ? "Ativo" : "Inativo"
    },
    {
        accessorKey: "createdAt",
        header: "Cadastro",
        cell: ({ row }) => format(new Date(row.getValue("createdAt")), "dd/MM/yyyy"),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original

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

                        {/* Dialog para ver pedidos */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    Ver Pedidos
                                </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>Pedidos de {user.username}</DialogTitle>
                                </DialogHeader>
                                <UserOrdersDialog userId={user._id} />
                            </DialogContent>
                        </Dialog>

                        {/* Dialog para editar usuário */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    Editar
                                </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                    <DialogTitle>Editar Usuário</DialogTitle>
                                </DialogHeader>
                                <UserEditForm user={user} />
                            </DialogContent>
                        </Dialog>

                        <DropdownMenuItem
                            onClick={() => deleteUser(user._id)}
                            className="text-red-500"
                        >
                            Deletar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
export function UserTable(props: { data: User[] }) {
    return (
        <DataTable
            data={props.data}
            columns={userColumns}
        />
    )
}
