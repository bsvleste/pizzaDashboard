import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="">
      <h1>Cabecalho</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
