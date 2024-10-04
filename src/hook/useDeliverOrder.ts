import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deliverOrder } from '@/api/deliver-order'
import { GetOrdersResponse } from '@/api/get-orders'

export function useDeliverOrder() {
  const queryClient = useQueryClient()
  const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrder,
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
                  status: 'delivered',
                }
              }
              return order
            }),
          })
        })
      },
    })
  return {
    deliverOrderFn,
    isDeliveringOrder,
  }
}
