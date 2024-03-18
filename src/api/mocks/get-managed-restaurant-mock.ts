import { http, HttpResponse } from 'msw'

import { GetManagedRestaturantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaturantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    managerId: 'custom-manager-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
