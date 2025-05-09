"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
    SortingState,
    VisibilityState,
    getSortedRowModel,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import { AnyZodObject } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Input } from "../input";
import { DataTableViewOptions } from "./col-toggle";
import { DataTablePagination } from "./pagination";
import { Card } from "../card";
import { FieldConfig, GenericFormsInput } from "../input/generic";
import { SheetForm } from "@/components/widgets/sheet-form";
import { ExportTo } from "@/components/widgets/export";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    exportTo?: true;
    newItem?: {
        name?: string;
        schema: AnyZodObject;
        defaultValues: any;
        fieldConfig: Record<string, FieldConfig<AnyZodObject>>;
    };
    onNewItem?: (newItem: any) => void;
    handleRowClick?: (data: TData) => void;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    exportTo,
    newItem,
    onNewItem,
    handleRowClick,
}: DataTableProps<TData, TValue>) {
    const contentRef = useRef<HTMLTableElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        onRowSelectionChange: setRowSelection,
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            globalFilter,
            rowSelection,
        },
    });
    const handleExport = async (format: "csv" | "excel" | "pdf" | "print") => {
        const selectedData = table
            .getSelectedRowModel()
            .rows.map((row) => row.original);

        if (selectedData.length === 0) {
            toast("Erro ao exportar.", {
                description: "Você precisa selecionar os itens que você quer exportar.",
            });
            return;
        }

        if (format === "print") {
            reactToPrintFn();
            return;
        }

        try {
            const response = await fetch("/api/export_to", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    format,
                    data: selectedData,
                }),
            });

            if (!response.ok) {
                throw new Error("Erro ao exportar os dados.");
            }

            const result = await response.json();
            const fileUrl = result.fileUrl;

            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = `export.${format}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch {
            toast("Erro ao exportar.", {
                description: "houve um problema ao exportar ",
            });
        }
    };
    return (
        <div className="flex flex-col p-4 gap-4 w-full">
            <Card>
                <div className="flex items-center p-4 gap-4 overflow-x-auto">
                    <Input
                        placeholder="Pesquisar..."
                        value={globalFilter ?? ""}
                        onChange={(event) => setGlobalFilter(event.target.value)}
                        className="max-w-sm"
                    />
                    {exportTo && <ExportTo exportTo={(format) => handleExport(format)} />}
                    {newItem && onNewItem && (
                        <SheetForm
                            schema={newItem.schema}
                            triggerLabel={
                                <>
                                    <Plus />
                                    Adicionar {newItem.name}
                                </>
                            }
                            onSubmit={onNewItem}
                            title={
                                newItem.name
                                    ? `Formulário para criar um(a) ${newItem.name}`
                                    : "Formulário"
                            }
                            defaultValues={newItem.defaultValues}
                        >
                            <GenericFormsInput
                                variants="single"
                                fieldConfig={newItem.fieldConfig}
                            />
                        </SheetForm>
                    )}
                    <DataTableViewOptions table={table} />
                </div>
            </Card>
            <Card>
                <div className="overflow-x-auto">
                    <Table className="min-w-full">
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        onClick={
                                            handleRowClick
                                                ? () => handleRowClick(row.original)
                                                : undefined
                                        }
                                        style={{ cursor: handleRowClick ? "pointer" : "default" }}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        Sem resultados.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <DataTablePagination table={table} />
            </Card>
            <div ref={contentRef} className="hidden">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getSelectedRowModel().rows.length ? (
                            table.getSelectedRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    Nenhum item selecionado.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}