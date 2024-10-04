import { useQueryClient } from '@tanstack/react-query'

import { GetOrdersResponse } from '@/api/get-orders'
import { OrderStatus } from '@/pages/app/orders/orders-status'

export function updateOrdersStatusOnCache(
  orderId: string,
  status: OrderStatus,
) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = useQueryClient()
  const orderListcached = queryClient.getQueriesData<GetOrdersResponse>({
    queryKey: ['orders'],
  })
  orderListcached.forEach(([cachedKey, cacheData]) => {
    if (!cacheData) return
    queryClient.setQueryData<GetOrdersResponse>(cachedKey, {
      ...cacheData,
      orders: cacheData.orders.map((order) => {
        if (order.orderId === orderId) {
          return {
            ...order,
            status,
          }
        }
        return order
      }),
    })
  })
}
