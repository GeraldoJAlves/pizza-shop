import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
