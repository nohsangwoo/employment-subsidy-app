import type { ReactNode } from "react"

interface ChartCardProps {
  title: string
  children: ReactNode
  className?: string
}

export function ChartCard({ title, children, className = "" }: ChartCardProps) {
  return (
    <div className={`rounded-lg border bg-card p-4 shadow-sm ${className}`}>
      <h3 className="mb-4 text-sm font-medium">{title}</h3>
      <div className="h-[300px]">{children}</div>
    </div>
  )
}

