import { useQuery } from '@tanstack/react-query'

import { getMonthCanceledOrdersAmountResponse } from '@/api/get-month-canceled-orders-amount'

export function useMonthCanceledOrdersAmount() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmountResponse,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })
  return {
    monthCanceledOrdersAmount,
  }
}
