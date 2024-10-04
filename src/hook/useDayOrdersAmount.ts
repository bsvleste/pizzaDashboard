import { useQuery } from '@tanstack/react-query'

import { getDayOrdersAmount } from '@/api/get-days-orders-amount'

export function useDayOrdersAmount() {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ['metrics', 'day-orders-amount'],
  })
  return {
    dayOrdersAmount,
  }
}
