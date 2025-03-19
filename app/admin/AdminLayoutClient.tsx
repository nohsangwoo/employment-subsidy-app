"use client"

import type React from "react"

import { Inter } from "next/font/google"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { ThemeProvider } from "@/contexts/theme-context"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export default function AdminLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={inter.className}>
      <AuthProvider>
        <ThemeProvider>
          <div className="flex h-screen overflow-hidden bg-background">
            <AdminSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <AdminHeader />
              <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

