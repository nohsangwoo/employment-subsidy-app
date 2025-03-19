"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  phone: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // 앱 시작 시 로컬 스토리지에서 사용자 정보 불러오기
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // 로그인 함수
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // 실제 구현에서는 API 호출로 대체
      // 여기서는 간단한 모의 로그인 구현
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 로딩 시뮬레이션

      // 모의 사용자 데이터
      const mockUser: User = {
        id: "user123",
        name: "홍길동",
        email: email,
        phone: "010-1234-5678",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      router.push("/") // 로그인 후 홈으로 이동
    } catch (error) {
      console.error("로그인 실패:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // 로그아웃 함수
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

