import { env } from '@/env'
import {setupWorker} from 'msw/browser'
import { signInMock } from './sign-in.mock'
import { registerRestaurantMock } from './register-restaurant-mocks'
import { getDayOrdersAmountMock } from './get-day-orders-amount.mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount.mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-amount.mock'
import { getMonthRevenueMock } from './get-month-revenue.mock'
import { getPopularProductsMock } from './get-popular-products.mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period.mock'
import { getProfileMock } from './get-profile.mock'
import { getManagerRestaurantMock } from './get-manager-restaurant.mock'
import { updateProfileMock } from './update-profile.mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
  getManagerRestaurantMock,
  getProfileMock,
  updateProfileMock
   
)
export async function enableMSW() {
  if(env.MODE !== 'test') return
  await worker.start()
}