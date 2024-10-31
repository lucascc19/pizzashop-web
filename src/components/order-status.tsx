export type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

interface OrderStatusStyle {
  label: string;
  color: string;
}

const orderStatusMap: Record<OrderStatus, OrderStatusStyle> = {
  pending: { label: "Pendente", color: "bg-slate-400" },
  canceled: { label: "Cancelado", color: "bg-rose-500" },
  processing: { label: "Em preparo", color: "bg-amber-500" },
  delivering: { label: "Em entrega", color: "bg-amber-500" },
  delivered: { label: "Entregue", color: "bg-emerald-500" },
};

export const OrderStatus = ({ status }: OrderStatusProps) => {
  const { label, color } = orderStatusMap[status];

  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="font-medium text-muted-foreground">{label}</span>
    </div>
  );
};
