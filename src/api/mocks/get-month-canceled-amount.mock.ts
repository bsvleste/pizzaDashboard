import {http,HttpResponse} from 'msw'
import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'
export const getMonthCanceledOrdersAmountMock = http.get<never,never,GetMonthCanceledOrdersAmountResponse>("/metrics/month-canceled-orders-amount",
  () => {
    return  HttpResponse.json({
      diffFromLastMonth: -5,
      amount: 200,
      
    })
  }
)