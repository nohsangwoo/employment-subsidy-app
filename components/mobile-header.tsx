import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface MobileHeaderProps {
  title: string
  showBackButton?: boolean
  backUrl?: string
}

export function MobileHeader({ title, showBackButton = false, backUrl = "/" }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-background px-4">
      {showBackButton && (
        <Link href={backUrl} className="mr-3">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      )}
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
          ES
        </div>
        <h1 className="font-semibold">{title}</h1>
      </div>
    </header>
  )
}

