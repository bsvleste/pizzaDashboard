import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useToast } from '@/components/ui/use-toast'
import { useRestaurant } from '@/hook/useRestaurant'
import { useUpdateProfile } from '@/hook/useUpdateProfile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
})
type StoreProfileSchema = z.infer<typeof storeProfileSchema>
export function StoreProfileDialog() {
  const { toast } = useToast()
  const { updateProfileFn } = useUpdateProfile()
  const { restaurant } = useRestaurant()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: restaurant?.name ?? '',
      description: restaurant?.description ?? '',
    },
  })
  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })
      toast({
        title: 'Pizza Shop',
        description: `Restauranta atualizado com sucesso`,
      })
    } catch (error) {
      toast({
        title: 'Pizza Shop',
        variant: 'destructive',
        description:
          'Erro ao atualizar o  restaurante, tente novamente mais tarde',
      })
      console.error('Deu ruim', error)
    }
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Ataulize as infromçãoe de seu estabelecimento visivie ao seu Cliente
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input
              className="col-span-3"
              id="name"
              type="text"
              {...register('name')}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              {...register('description')}
              className="col-span-3"
              id="description"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'ghost'} type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant={'success'} type="submit" disabled={isSubmitting}>
            {' '}
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
