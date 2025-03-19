"use client"

import { Bell, Moon, Sun, User, Home } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useState } from "react"
import Link from "next/link"

export function AdminHeader() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">관리자 페이지</h1>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
          >
            <Home className="h-4 w-4" />
            <span>앱으로 가기</span>
          </Link>

          <button className="rounded-full p-2 hover:bg-muted">
            <Bell className="h-5 w-5" />
          </button>

          <button className="rounded-full p-2 hover:bg-muted" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <div className="relative">
            <button
              className="flex items-center gap-2 rounded-full p-1 hover:bg-muted"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <User className="h-4 w-4" />
              </div>
              <span className="hidden text-sm font-medium md:block">관리자</span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-md border bg-card shadow-lg">
                <div className="p-2">
                  <div className="border-b pb-2">
                    <p className="text-sm font-medium">관리자</p>
                    <p className="text-xs text-muted-foreground">admin@example.com</p>
                  </div>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
                        프로필 설정
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10"
                      >
                        로그아웃
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

