import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateRoomrequest } from './types/create-room-request'
import type { CreateRoomresponse } from './types/create-room-reponse'

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomrequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: CreateRoomresponse = await response.json()
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-room'],
      })
    },
  })
}