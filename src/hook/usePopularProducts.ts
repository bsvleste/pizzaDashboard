import { useQuery } from '@tanstack/react-query'

import { getPopularProduct } from '@/api/get-popular-products'

export function usePopularProducts() {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProduct,
  })
  return { popularProducts }
}
