import { api } from '@/lib/axios'

export interface DeliverOrderStatus {
  orderId: string
}
export async function deliverOrder({ orderId }: DeliverOrderStatus) {
  await api.patch(`orders/${orderId}/deliver`)
}
