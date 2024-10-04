import { useQuery } from '@tanstack/react-query'

import { getMonthRevenue } from '@/api/get-month-revenue'

export function useMonthRevenue() {
  const { data: monthRevenue } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ['metrics', 'month-revenue'],
  })
  return {
    monthRevenue,
  }
}
