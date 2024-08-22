import { useMutation } from '@tanstack/react-query'

import { updateProfile } from '@/api/update-profile'

export function useUpdateProfile() {
  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
  })
  return {
    updateProfileFn,
  }
}
