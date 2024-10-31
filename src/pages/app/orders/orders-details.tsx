import { DialogTitle } from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetOrderDetails } from "@/hook/useGetOrderDetails";

import { OrderStatus } from "./orders-status";
import { OrderTableSkeleton } from "./order-table-skeleton";

export interface OrderDetailsProps {
  orderId: string;
  open: boolean;
}
export function OrdersDetails({ orderId, open }: OrderDetailsProps) {
  const { order } = useGetOrderDetails({ orderId, open });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {orderId} </DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      {order ? (
        <div className="spcace-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">status</TableCell>
                <TableCell className="flex justify-end">
                  <OrderStatus status={order.status} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.phone ?? "Telefone não informado"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Email</TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado hà
                </TableCell>
                <TableCell className="flex justify-end">
                  {formatDistanceToNow(order.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd:</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">SubTotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product.name}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    {(item.priceInCents / 100).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    {((item.priceInCents / 100) * item.quantity).toLocaleString(
                      "pt-br",
                      {
                        style: "currency",
                        currency: "BRL",
                      },
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do Pedido</TableCell>
                <TableCell className="text-medium text-right">
                  {(order.totalInCents / 100).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      ) : (
        <OrderTableSkeleton />
      )}
    </DialogContent>
  );
}
