import { useQuery } from '@tanstack/react-query'

import { getManagerRestaurant } from '@/api/get-manager-restaurant'

export function useRestaurant() {
  const { data: restaurant, isLoading: isLoadingManager } = useQuery({
    queryKey: ['manager-restaurant'],
    queryFn: getManagerRestaurant,
    staleTime: Infinity,
  })
  return {
    restaurant,
    isLoadingManager,
  }
}
