import { http, HttpResponse } from "msw";
import { DispatchOrderStatus } from "../dispatch-order";

export const dispatchOrderMocks = http.patch<DispatchOrderStatus, never, never>(
  'orders/:orderId/dispatch', async ({ params }) => {
  if (params.orderId === 'error-order-id') { 
    return new HttpResponse(null, { status: 400 })
  }
  return new HttpResponse(null, { status: 204 })
})  