import {http,HttpResponse} from 'msw'
import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'
export const getDailyRevenueInPeriodMock = http.get<never,never,GetDailyRevenueInPeriodResponse>("metrics/daily-receipt-in-period",
  () => {
    return HttpResponse.json(
      [
        {date: '2022-01-01', receipt: 1000},
        {date: '2022-01-02', receipt: 400},
        {date: '2022-01-03', receipt: 250},
        {date: '2022-01-04', receipt: 506},
        {date: '2022-01-05', receipt: 100},
        {date: '2022-01-06', receipt: 258},
        {date: '2022-01-07', receipt: 150},
      ]
    )
  }
)