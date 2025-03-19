import type { ReactNode } from "react"

interface Column {
  header: string
  accessor: string
  cell?: (value: any, row: any) => ReactNode
}

interface DataTableProps {
  columns: Column[]
  data: any[]
  title?: string
}

export function DataTable({ columns, data, title }: DataTableProps) {
  return (
    <div className="rounded-lg border bg-card shadow-sm">
      {title && (
        <div className="border-b px-4 py-3">
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium text-muted-foreground"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b last:border-0 hover:bg-muted/50">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="whitespace-nowrap px-4 py-3 text-sm">
                    {column.cell ? column.cell(row[column.accessor], row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

