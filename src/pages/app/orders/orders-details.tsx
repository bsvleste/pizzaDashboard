import { DialogTitle } from '@radix-ui/react-dialog'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrdersDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: jdjsdi32333duiousd98didi</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="spcace-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-500"></span>
                  <span>Pendente</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Bruno de Souza Valeiro
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">11 967800528</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                bvaleiro@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado hà
              </TableCell>
              <TableCell className="flex justify-end">4 dias</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd:</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">SubTotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperone</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$59,00</TableCell>
              <TableCell className="text-right">R$118,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mussarela</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$59,00</TableCell>
              <TableCell className="text-right">R$59,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido</TableCell>
              <TableCell className="text-medium text-right">R$177,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
