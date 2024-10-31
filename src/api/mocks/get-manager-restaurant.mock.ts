import {http,HttpResponse} from 'msw'
import { GetManagerRestaurantResponse } from '../get-manager-restaurant'
export const getManagerRestaurantMock = http.get<never,never,GetManagerRestaurantResponse>("/managed-restaurant",
  () => {
    return  HttpResponse.json({
      id: 'custom-restaurant-id ',
      name: 'Valeiro',
      description: 'Descrição do restaurante',
      managerId: 'manager-id',
      createdAt: new Date(),
      updatedAt: null,
    })
  }
)