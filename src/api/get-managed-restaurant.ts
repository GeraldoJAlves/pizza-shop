import { api } from '@/lib/axios'

export interface GetManagedRestaturantResponse {
  id: string
  name: string
  description: string | null
  managerId: string
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaturant() {
  const response = await api.get<GetManagedRestaturantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
