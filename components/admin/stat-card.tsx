import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  isPositive?: boolean
  icon: LucideIcon
  iconColor?: string
  iconBgColor?: string
}

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
}: StatCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="mt-1 text-2xl font-bold">{value}</h3>
          {change && (
            <p className={`mt-1 text-xs ${isPositive ? "text-green-600" : "text-red-600"}`}>
              {isPositive ? "+" : "-"}
              {change} 전월 대비
            </p>
          )}
        </div>
        <div className={`rounded-full ${iconBgColor} p-2 ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

