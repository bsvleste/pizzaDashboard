import {http,HttpResponse} from 'msw'
import { GetOrdersDetailsParams, GetOrdersDetailsResponse } from '../get-order-details'
export const getOrderDetailsMock = http.get<
  GetOrdersDetailsParams, never, GetOrdersDetailsResponse>("/orders/:orderId",
  ({params}) => {
    return  HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'Valeiro',
        email: 'bvaleiro@gmail.com',
        phone: '999999999',
      },
      status: 'pending',
      totalInCents: 6000,
      createdAt: new Date().toISOString(),
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 2000,
          quantity: 2,
          product: {
            name: 'Pizza Calabreza'
          }
        },
        {
          id: 'order-item-2',
          priceInCents: 2000,
          quantity: 1,
          product: {
            name: 'Pizza Musarrela'
          }
        },
        
      ]
        
    })
  }
)