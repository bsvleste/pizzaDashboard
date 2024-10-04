import { api } from '@/lib/axios'

export interface ApproveOrderStatus {
  orderId: string
}
export async function approveOrder({ orderId }: ApproveOrderStatus) {
  await api.patch(`orders/${orderId}/approve`)
}
