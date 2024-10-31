import { Helmet } from "react-helmet-async";

import { Pagination } from "@/components/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetOrders } from "@/hook/useGetOrders";

import { OrdersFormFilter } from "./orders-form-filter";
import { OrdersTableRows } from "./orders-table-rows";
import { OrderTableSkeleton } from "./order-table-skeleton";

export function Orders() {
  const { results, pagination, isLoadingOrders } = useGetOrders();
  function handlePagination(pageIndex: number) {
    pagination(pageIndex);
  }
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrdersFormFilter />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingOrders && <OrderTableSkeleton />}
                {results &&
                  results.orders.map((order) => {
                    return (
                      <OrdersTableRows key={order.orderId} order={order} />
                    );
                  })}
              </TableBody>
            </Table>
          </div>
          {results && (
            <Pagination
              onPageChange={handlePagination}
              pageIndex={results?.meta.pageIndex}
              totalCount={results?.meta.totalCount}
              perPage={results?.meta.perPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
