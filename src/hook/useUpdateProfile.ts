import { useMutation, useQueryClient } from '@tanstack/react-query'

import { GetManagerRestaurantResponse } from '@/api/get-manager-restaurant'
import { updateProfile } from '@/api/update-profile'

interface StorageProfile {
  name: string
  description: string | null
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  function updateManegerRestaurantCache(data: StorageProfile) {
    const cached = queryClient.getQueryData<GetManagerRestaurantResponse>([
      'manager-restaurant',
    ])
    if (cached) {
      queryClient.setQueryData<GetManagerRestaurantResponse>(
        ['manager-restaurant'],
        {
          ...cached,
          name: data.name,
          description: data.description,
        },
      )
    }
    return {
      cached,
    }
  }
  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cached } = updateManegerRestaurantCache({ name, description })
      return { previusProfile: cached }
    },
    onError(_, __, context) {
      if (context?.previusProfile) {
        updateManegerRestaurantCache(context.previusProfile)
      }
    },
  })
  return {
    updateProfileFn,
  }
}
