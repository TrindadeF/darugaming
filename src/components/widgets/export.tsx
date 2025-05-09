"use client";

import * as React from "react";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type ExportToType = {
    exportTo: (to: "csv" | "excel" | "pdf" | "print") => void;
};
export function ExportTo({ exportTo }: ExportToType) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <Download /> Exportar
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => exportTo("csv")}>CSV</DropdownMenuItem>
                <DropdownMenuItem onClick={() => exportTo("excel")}>
                    EXCEL
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => exportTo("pdf")}>PDF</DropdownMenuItem>
                <DropdownMenuItem onClick={() => exportTo("print")}>
                    IMPRIMIR
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}