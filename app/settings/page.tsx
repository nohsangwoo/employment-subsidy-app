"use client"

import { MobileHeader } from "@/components/mobile-header"
import {
  User,
  Bell,
  Moon,
  Globe,
  Shield,
  FileText,
  LogOut,
  ChevronRight,
  UserCircle,
  Edit,
  LayoutDashboard,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useTheme } from "@/contexts/theme-context"
import { useState } from "react"

export default function SettingsPage() {
  const { user, logout, isAuthenticated } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <MobileHeader title="설정" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">설정</h1>
          <p className="text-sm text-muted-foreground">앱 설정 및 계정 관리</p>
        </section>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">계정</h2>
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 mb-3 rounded-md border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{user?.name}</h3>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                  <button className="p-2 rounded-full hover:bg-muted">
                    <Edit className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="space-y-2">
                  <Link href="/profile" className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      <span className="text-sm">프로필 관리</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link href="/security" className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm">보안 설정</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 mb-3 rounded-md border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">로그인하지 않음</h3>
                    <p className="text-xs text-muted-foreground">로그인하여 계정을 관리하세요</p>
                  </div>
                </div>
                <Link href="/login" className="block w-full">
                  <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    로그인 / 회원가입
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">앱 설정</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <span className="text-sm">알림 설정</span>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-10 h-5 rounded-full flex items-center transition-colors duration-300 ${notifications ? "bg-primary justify-end" : "bg-gray-300 dark:bg-gray-600 justify-start"}`}
                >
                  <span className={`w-4 h-4 rounded-full bg-white block mx-0.5`}></span>
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center gap-2">
                  <Moon className="h-5 w-5 text-primary" />
                  <span className="text-sm">다크 모드</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-10 h-5 rounded-full flex items-center transition-colors duration-300 ${isDarkMode ? "bg-primary justify-end" : "bg-gray-300 dark:bg-gray-600 justify-start"}`}
                >
                  <span className={`w-4 h-4 rounded-full bg-white block mx-0.5`}></span>
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">언어 설정</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground">한국어</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">법적 정보</h2>
            <div className="space-y-2">
              <Link href="/privacy" className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">개인정보 처리방침</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              <Link href="/terms" className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">이용약관</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">앱 정보</h2>
            <div className="p-3 rounded-md border">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">앱 버전</p>
                  <p>1.0.0</p>
                </div>
                <div>
                  <p className="text-muted-foreground">최종 업데이트</p>
                  <p>2025.03.19</p>
                </div>
                <div>
                  <p className="text-muted-foreground">개발</p>
                  <p>고용노동부</p>
                </div>
                <div>
                  <p className="text-muted-foreground">지원</p>
                  <p>help@employment.go.kr</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="/admin"
            target="_blank"
            className="flex items-center justify-between p-3 rounded-md border bg-card shadow-sm"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">관리자 페이지로 가기</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </a>

          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="w-full rounded-md border border-destructive bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
            >
              <div className="flex items-center justify-center gap-2">
                <LogOut className="h-4 w-4" />
                <span>로그아웃</span>
              </div>
            </button>
          )}
        </div>
      </main>
    </>
  )
}

