import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

const signUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
})
type SignUpForm = z.infer<typeof signUpForm>
export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  const { toast } = useToast()
  const navigate = useNavigate()
  async function handleSignIn(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: 'Pizza Shop',
        description: `Restaurante,${data.restaurantName}, criado com sucesso!`,
        action: (
          <Button
            variant="link"
            onClick={() => navigate(`/sign-in?email=${data.email}`)}
          >
            Login
          </Button>
        ),
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Pizza Shop',
        description: 'Erro ao cadastrar restaurante',
        action: (
          <ToastAction altText="tente novamente">Tente novamente</ToastAction>
        ),
      })
    }
  }
  return (
    <div>
      <Helmet title="Sign Up" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="link">
          <Link to="/sign-in">Sign In</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tighter">
              Criar conta gratis
            </h2>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Nome do gerente</Label>
              <Input
                type="text"
                id="managerName"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
              <Input
                type="text"
                id="restaurantName"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input type="tel" id="phone" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Criar conta
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, voçê concorda com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                termos
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4">
                politicas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
