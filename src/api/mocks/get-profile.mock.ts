import {http,HttpResponse} from 'msw'
import { GetProfileResponse } from '../get-profile'
export const getProfileMock = http.get<
  never, never, GetProfileResponse>("/me",
  () => {
    return  HttpResponse.json({
      id: 'custom-user-id ',
      name: 'Valeiro',
      email: 'bvaleiro@gmail.com',
      phone: '999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  }
)