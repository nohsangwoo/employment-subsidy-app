import type React from "react"
// 서버 컴포넌트에서 메타데이터를 정의하고 기본 레이아웃 구조를 제공합니다
import type { Metadata } from "next"
import "../globals.css"
import AdminLayoutClient from "./AdminLayoutClient"

export const metadata: Metadata = {
  title: "고용 보조금 앱 - 관리자",
  description: "고용 보조금 앱 관리자 페이지",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}

