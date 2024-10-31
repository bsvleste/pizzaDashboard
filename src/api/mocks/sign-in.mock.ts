import {http,HttpResponse} from 'msw'
import { SigninBody } from '../sign-in'
export const signInMock = http.post<never,SigninBody>("/authenticate", async ({ request }) => {
  const { email } = await request.json()
  if (email === 'bvaleiro@gmail.com')
  {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Set-cookie": "auth=sample-jwt"
      }
    })
 }

  return new HttpResponse(null, { status: 401 })
}) 