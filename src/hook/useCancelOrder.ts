import { useMutation, useQueryClient } from '@tanstack/react-query'

import { cancelOrder } from '@/api/cancel-order'
import { GetOrdersResponse } from '@/api/get-orders'

export function useCancelOrder() {
  const queryClient = useQueryClient()
  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_, { orderId }) {
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
                  status: 'canceled',
                }
              }
              return order
            }),
          })
        })
      },
    })
  return {
    cancelOrderFn,
    isCancelingOrder,
  }
}
