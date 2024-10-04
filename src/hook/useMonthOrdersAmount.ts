import { useQuery } from '@tanstack/react-query'

import { getMonthOrdersAmount } from '@/api/get-mouth-orders-amount'

export function useMonthOrdersAmount() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })
  return {
    monthOrdersAmount,
  }
}
