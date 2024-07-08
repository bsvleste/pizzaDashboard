import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function SignInLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza Shop</span>
        </div>
        <div className="text-sm">
          Painel do parceiro @copyright {new Date().getFullYear()}
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
