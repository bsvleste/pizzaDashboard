import { api } from '@/lib/axios'

export interface getMonthOrdersAmount {
  amount: number
  diffFromLastMonth: number
}
export async function getMonthOrdersAmount() {
  const response = await api.get<getMonthOrdersAmount>(
    '/metrics/month-orders-amount',
  )
  return response.data
}
