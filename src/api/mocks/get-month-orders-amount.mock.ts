import {http,HttpResponse} from 'msw'
import { getMonthOrdersAmount } from '../get-mouth-orders-amount'
export const getMonthOrdersAmountMock = http.get<never,never,getMonthOrdersAmount>("/metrics/month-orders-amount",
  () => {
    return  HttpResponse.json({
      diffFromLastMonth: -5,
      amount: 105,
      
    })
  }
)