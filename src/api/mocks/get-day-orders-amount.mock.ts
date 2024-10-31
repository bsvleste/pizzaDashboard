import {http,HttpResponse} from 'msw'
import { GetDayOrdersAmountResponse } from '../get-days-orders-amount'
export const getDayOrdersAmountMock = http.get<never,never,GetDayOrdersAmountResponse>("/metrics/day-orders-amount",
  () => {
    return  HttpResponse.json({
      diffFromYesterday: -5,
      amount: 20,
      
    })
  }
)