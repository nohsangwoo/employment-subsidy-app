"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { LayoutDashboard, Settings, Users, Bell, BarChart3, Menu, X, LogOut, Home } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const menuItems = [
    {
      title: "대시보드",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "앱 관리",
      href: "/admin/app-management",
      icon: Settings,
    },
    {
      title: "사용자 관리",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "공지 및 이벤트",
      href: "/admin/notifications",
      icon: Bell,
    },
    {
      title: "통계 및 분석",
      href: "/admin/analytics",
      icon: BarChart3,
    },
  ]

  return (
    <>
      {/* 모바일 오버레이 */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={closeSidebar} />}

      {/* 모바일 토글 버튼 */}
      <button
        className="fixed top-4 left-4 z-50 rounded-md bg-primary p-2 text-primary-foreground lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* 사이드바 */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-card shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
                ES
              </div>
              <span className="font-semibold">고용 보조금 관리자</span>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    onClick={closeSidebar}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t p-4">
            <div className="space-y-2">
              <Link
                href="/"
                className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                target="_blank"
              >
                <Home className="mr-2 h-5 w-5" />
                앱으로 돌아가기
              </Link>
              <button className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10">
                <LogOut className="mr-2 h-5 w-5" />
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

