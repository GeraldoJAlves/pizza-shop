import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock, getDailyRevenueInPeriodMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  console.log('test')
  await worker.start()
}
