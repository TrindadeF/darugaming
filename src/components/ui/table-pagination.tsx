import { Table } from "@tanstack/react-table";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
}
// "pagination": {
//     "rows_per_page": "Linhas por página",
//     "page": "Página",
//     "of": "de",
//     "first_page": "Voltar para a primeira página",
//     "previous": "Anterior",
//     "next": "Próximo",
//     "last_page": "Ir para a última"
// },
export function DataTablePagination<TData>({
    table,
}: DataTablePaginationProps<TData>) {
    const { t } = useTranslation('account')
    return (
        <div className="flex items-center justify-end px-2 py-2">
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{t("pagination.rows_per_page")}</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    {t("pagination.page")} {table.getState().pagination.pageIndex + 1} {t("pagination.of")} {table.getPageCount()}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">{t('pagination.first_page')}</span>
                        <ChevronsLeft />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">{t('pagination.previous')}</span>
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">{t('pagination.next')}</span>
                        <ChevronRight />
                    </Button>
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">{t('pagination.last_page')}</span>
                        <ChevronsRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}