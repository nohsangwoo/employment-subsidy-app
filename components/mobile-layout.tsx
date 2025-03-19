"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Search, BookOpen, HelpCircle, Settings } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

interface MobileLayoutProps {
  children: ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  // 관리자 페이지인 경우 가로 제한 및 하단 네비게이션 없이 콘텐츠만 표시
  if (pathname.startsWith("/admin")) {
    return <>{children}</>
  }

  return (
    <div className="flex flex-col min-h-screen mx-auto bg-background" style={{ maxWidth: "428px" }}>
      <div className="flex-1 pb-16">{children}</div>

      {/* 하단 탭 내비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto" style={{ maxWidth: "428px" }}>
        <div className="flex items-center justify-around h-16 bg-background border-t border-gray-200">
          <Link
            href="/"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">홈</span>
          </Link>

          <Link
            href={isAuthenticated ? "/inquiry" : "/login"}
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/inquiry" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Search className="w-5 h-5" />
            <span className="text-xs mt-1">조회</span>
          </Link>

          <Link
            href="/guides"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname.startsWith("/guides") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs mt-1">안내</span>
          </Link>

          <Link
            href="/help"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/help" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-xs mt-1">도움말</span>
          </Link>

          <Link
            href="/settings"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/settings" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs mt-1">설정</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

