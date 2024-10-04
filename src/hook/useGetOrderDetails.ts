import { useQuery } from '@tanstack/react-query'

import { getOrderDetails } from '@/api/get-order-details'

interface UseGetOrderDetailsParam {
  orderId: string
  open: boolean
}
export function useGetOrderDetails({ orderId, open }: UseGetOrderDetailsParam) {
  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  })
  return {
    order,
  }
}
