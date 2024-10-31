import {http,HttpResponse} from 'msw'
import { GetPopularProductResponse } from '../get-popular-products'
export const getPopularProductsMock = http.get<never,never,GetPopularProductResponse>("/metrics/popular-products",
  () => {
    return HttpResponse.json(
      [
        {product: 'Pizza', amount: 10},
        {product: 'Hamburguer', amount: 20},
        {product: 'Burguer', amount: 30},
        {product: 'Sandwich', amount: 40},
        {product: 'Bebida', amount: 50},   
      ]
    )
  }
)