import {http,HttpResponse} from 'msw'
import { GetMonthRevenueResponse } from '../get-month-revenue'
export const getMonthRevenueMock = http.get<never,never,GetMonthRevenueResponse>("/metrics/month-receipt",
  () => {
    return  HttpResponse.json({
      diffFromLastMonth: 10,
      receipt:35002
      
    })
  }
)