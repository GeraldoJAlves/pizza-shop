export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const OrderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {(status === 'processing' || status === 'delivering') && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {OrderStatusMap[status]}
      </span>
    </div>
  )
}
