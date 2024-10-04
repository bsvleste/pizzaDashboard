import { useMutation, useQueryClient } from '@tanstack/react-query'

import { dispatchOrder } from '@/api/dispatch-order'
import { GetOrdersResponse } from '@/api/get-orders'

export function useDispatchOrder() {
  const queryClient = useQueryClient()
  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,
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
                  status: 'delivering',
                }
              }
              return order
            }),
          })
        })
      },
    })
  return {
    dispatchOrderFn,
    isDispatchingOrder,
  }
}
