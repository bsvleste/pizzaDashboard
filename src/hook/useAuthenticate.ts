import { useMutation } from '@tanstack/react-query'

import { signIn } from '@/api/sign-in'

export function useAthenticate() {
  const { mutateAsync: authenticateFn } = useMutation({
    mutationFn: signIn,
  })
  return {
    authenticateFn,
  }
}
