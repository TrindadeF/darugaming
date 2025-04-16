// product-component.tsx
"use client";

import { GetProductConfig, productSchema } from "@/schemas/product";
import { DataTable } from "../ui/data-table/table";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { DataTableColumnHeader } from "../ui/data-table/col-header";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ProductEditForm } from "./product-dialog";
import { deleteProduct } from "@/lib/requests/deleteProduct";

export const productColumns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
        ),
    },
    {
        accessorKey: "title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Título" />,
    },
    {
        accessorKey: "category.name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Categoria" />,
    },
    {
        accessorKey: "price",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Preço" />,
        cell: ({ row }) => (
            <div>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(row.getValue("price"))}
            </div>
        ),
    },
    {
        accessorKey: "finalAmount",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Preço Final" />,
        cell: ({ row }) => (
            <div>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(row.getValue("finalAmount"))}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
        cell: ({ row }) => (row.getValue("status") ? "Ativo" : "Inativo"),
    },
    {
        accessorKey: "rating",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Avaliação" />,
    },
    {
        accessorKey: "isTrending",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Trending" />,
        cell: ({ row }) => (row.getValue("isTrending") ? "Sim" : "Não"),
    },
    {
        accessorKey: "isPreOrder",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Pré-venda" />,
        cell: ({ row }) => (row.getValue("isPreOrder") ? "Sim" : "Não"),
    },
    {
        accessorKey: "licenseKey",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Chave" />,
    },
    {
        accessorKey: "systemRequirements.minimum",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Req. Mínimos" />,
        cell: ({ row }) => row.original.systemRequirements?.minimum?.os,
    }, {
        id: "actions",
        cell: ({ row }) => {
            const product = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(product.title)}
                        >
                            Copiar nome
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Dialog>
                            <DialogTrigger asChild>
                                <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                >
                                    Editar
                                </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px]">
                                <DialogHeader>
                                    <DialogTitle>Editar Produto</DialogTitle>
                                </DialogHeader>
                                <ProductEditForm product={product} />
                            </DialogContent>
                        </Dialog>
                        <DropdownMenuItem onClick={() => deleteProduct(product._id)} >Deletar</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

];
const productDefaultValues = {
    categoryId: "",
    deviceId: undefined,
    platformId: undefined,
    genreId: undefined,
    title: "",
    slug: undefined,
    image: undefined,
    video: "",
    poster: undefined,
    shortDescription: "",
    description: "",
    discount: undefined,
    finalAmount: 0,
    price: 0,
    minimum: undefined,
    recommended: undefined,
    version: undefined,
    rating: 0,
    isTrending: undefined,
    isPreOrder: undefined,
    status: 1, // Assume 1 como ativo por padrão
    metaDescription: undefined,
    backgroundImage: undefined,
    accountEmail: undefined,
    attributes: [{
        name: "",
        values: [{ value: "", price: 0 }]
    }],
    images: [""],
    minimumOs: "Windows 10 64-bit",
    minimumStorage: "50 GB HDD",
    minimumProcessor: "Intel Core i5-4460",
    minimumMemory: "8 GB RAM",
    minimumGraphicsCard: "NVIDIA GTX 960 2GB",
    recommendedOs: "Windows 11 64-bit",
    recommendedStorage: "100 GB SSD",
    recommendedProcessor: "Intel Core i7-8700",
    recommendedMemory: "16 GB RAM",
    recommendedGraphicsCard: "NVIDIA RTX 3060 8GB",
    licenseKey: undefined
};
export function ProductTable(props: { data: Product[] }) {
    return (
        <DataTable
            data={props.data}
            columns={productColumns}
            newItem={{
                schema: productSchema,
                fieldConfig: GetProductConfig(),
                defaultValues: productDefaultValues
            }}
            onNewItem={(values) => console.log("Novo produto:", values)}
        />
    );
}