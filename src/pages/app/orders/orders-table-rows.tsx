import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { useApproveOrder } from '@/hook/useApproveOrder'
import { useCancelOrder } from '@/hook/useCancelOrder'
import { useDeliverOrder } from '@/hook/useDeliverOrder'
import { useDispatchOrder } from '@/hook/useDispatchOrder'

import { OrdersDetails } from './orders-details'
import { OrderStatus } from './orders-status'
export interface OrdersTableRowProops {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}
export function OrdersTableRows({ order }: OrdersTableRowProops) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const { cancelOrderFn, isCancelingOrder } = useCancelOrder()
  const { approveOrderFn, isApprovingOrder } = useApproveOrder()
  const { dispatchOrderFn, isDispatchingOrder } = useDispatchOrder()
  const { deliverOrderFn, isDeliveringOrder } = useDeliverOrder()
  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhe do pedido</span>
            </Button>
          </DialogTrigger>
          <OrdersDetails orderId={order.orderId} open={isDetailsOpen} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        {order.status === 'pending' && (
          <Button
            onClick={() => approveOrderFn({ orderId: order.orderId })}
            variant="outline"
            size="xs"
            disabled={isApprovingOrder}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        )}
        {order.status === 'processing' && (
          <Button
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
            variant="outline"
            size="xs"
            disabled={isDispatchingOrder}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Em Entrega
          </Button>
        )}
        {order.status === 'delivering' && (
          <Button
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
            variant="outline"
            size="xs"
            disabled={isDeliveringOrder}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Entregue
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isCancelingOrder
          }
          variant="destructive"
          size="xs"
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
