import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  // baseURL: env.VITE_API_URL,
  baseURL: 'http://localhost:3333',
  withCredentials: true,
})

// dely nas requiciçoes para backend

/* api.interceptors.request.use(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return config
}) */
