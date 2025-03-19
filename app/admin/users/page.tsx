"use client"

import { DataTable } from "@/components/admin/data-table"
import { Edit, Trash, Plus, Search, Download, Filter } from "lucide-react"

export default function UsersPage() {
  // 사용자 데이터
  const users = [
    {
      id: 1,
      name: "홍길동",
      email: "hong@example.com",
      phone: "010-1234-5678",
      registrationDate: "2025-03-01",
      lastLogin: "2025-03-19",
      status: "활성",
    },
    {
      id: 2,
      name: "김철수",
      email: "kim@example.com",
      phone: "010-2345-6789",
      registrationDate: "2025-03-05",
      lastLogin: "2025-03-18",
      status: "활성",
    },
    {
      id: 3,
      name: "이영희",
      email: "lee@example.com",
      phone: "010-3456-7890",
      registrationDate: "2025-03-10",
      lastLogin: "2025-03-17",
      status: "활성",
    },
    {
      id: 4,
      name: "박민수",
      email: "park@example.com",
      phone: "010-4567-8901",
      registrationDate: "2025-03-15",
      lastLogin: "2025-03-16",
      status: "활성",
    },
    {
      id: 5,
      name: "정지원",
      email: "jung@example.com",
      phone: "010-5678-9012",
      registrationDate: "2025-02-20",
      lastLogin: "2025-03-01",
      status: "비활성",
    },
  ]

  // 테이블 컬럼 정의
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "이름", accessor: "name" },
    { header: "이메일", accessor: "email" },
    { header: "전화번호", accessor: "phone" },
    { header: "가입일", accessor: "registrationDate" },
    { header: "최근 로그인", accessor: "lastLogin" },
    {
      header: "상태",
      accessor: "status",
      cell: (value: string) => (
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
            value === "활성"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      header: "작업",
      accessor: "id",
      cell: (value: number) => (
        <div className="flex space-x-2">
          <button className="rounded-md p-1 text-blue-600 hover:bg-blue-100">
            <Edit className="h-4 w-4" />
          </button>
          <button className="rounded-md p-1 text-red-600 hover:bg-red-100">
            <Trash className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">사용자 관리</h1>
        <p className="text-muted-foreground">앱 사용자 정보를 조회하고 관리하세요.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="사용자 검색..."
            className="w-full rounded-md border pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium">
            <Filter className="mr-2 h-4 w-4" />
            필터
          </button>
          <button className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium">
            <Download className="mr-2 h-4 w-4" />
            내보내기
          </button>
          <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
            <Plus className="mr-2 h-4 w-4" />
            사용자 추가
          </button>
        </div>
      </div>

      <DataTable columns={columns} data={users} />

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">총 {users.length}명의 사용자</p>
        <div className="flex items-center space-x-2">
          <button className="rounded-md border px-3 py-2 text-sm font-medium">이전</button>
          <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">1</button>
          <button className="rounded-md border px-3 py-2 text-sm font-medium">2</button>
          <button className="rounded-md border px-3 py-2 text-sm font-medium">3</button>
          <button className="rounded-md border px-3 py-2 text-sm font-medium">다음</button>
        </div>
      </div>
    </div>
  )
}

