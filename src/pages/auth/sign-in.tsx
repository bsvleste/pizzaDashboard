import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

const signInForm = z.object({
  email: z.string().email(),
})
type SignInForm = z.infer<typeof signInForm>
export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()
  const { toast } = useToast()
  async function handleSignIn({ email }: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: 'Pizza Shop',
        description: `Enviamos um link de authenticação para seu email: ${email}`,
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Pizza Shop',
        description: 'Credenciais invalidas',
        action: (
          <ToastAction altText="tente novamente">Tente novamente</ToastAction>
        ),
      })
    }
  }
  return (
    <div>
      <Helmet title="Sign In" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="link">
          <Link to="/sign-up">Sign Up</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tighter">
              Acessar o painel
            </h2>
            <p className="text-sm text-muted-foreground">
              Acompanhe seus pedidos pelo nosso painel
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
