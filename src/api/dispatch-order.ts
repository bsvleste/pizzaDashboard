import { api } from '@/lib/axios'

export interface DispatchOrderStatus {
  orderId: string
}
export async function dispatchOrder({ orderId }: DispatchOrderStatus) {
  await api.patch(`orders/${orderId}/dispatch`)
}
