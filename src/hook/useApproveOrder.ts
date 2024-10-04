import { useMutation, useQueryClient } from '@tanstack/react-query'

import { approveOrder } from '@/api/approve-order'
import { GetOrdersResponse } from '@/api/get-orders'

export function useApproveOrder() {
  const queryClient = useQueryClient()
  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
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
                  status: 'processing',
                }
              }
              return order
            }),
          })
        })
      },
    })
  return {
    approveOrderFn,
    isApprovingOrder,
  }
}
