"use client"

import { DataTable } from "@/components/admin/data-table"
import { Edit, Trash, Plus, Calendar, Bell } from "lucide-react"

export default function NotificationsPage() {
  // 공지사항 데이터
  const notices = [
    {
      id: 1,
      title: "고용장려금 신청 기간 연장 안내",
      type: "공지사항",
      startDate: "2025-03-01",
      endDate: "2025-03-31",
      status: "활성",
    },
    {
      id: 2,
      title: "앱 업데이트 안내 (v1.0.0)",
      type: "공지사항",
      startDate: "2025-03-15",
      endDate: "2025-03-25",
      status: "활성",
    },
    {
      id: 3,
      title: "서버 점검 안내",
      type: "공지사항",
      startDate: "2025-03-20",
      endDate: "2025-03-20",
      status: "예정",
    },
    {
      id: 4,
      title: "2025년 고용정책 변경사항",
      type: "공지사항",
      startDate: "2025-02-01",
      endDate: "2025-02-28",
      status: "만료",
    },
  ]

  // 이벤트 팝업 데이터
  const popups = [
    {
      id: 1,
      title: "청년 취업 지원 특별 프로그램 안내",
      type: "팝업",
      startDate: "2025-03-15",
      endDate: "2025-04-15",
      status: "활성",
    },
    {
      id: 2,
      title: "고용 보조금 앱 사용자 만족도 조사",
      type: "팝업",
      startDate: "2025-03-20",
      endDate: "2025-03-27",
      status: "예정",
    },
    {
      id: 3,
      title: "경력단절여성 재취업 상담 이벤트",
      type: "팝업",
      startDate: "2025-02-01",
      endDate: "2025-02-28",
      status: "만료",
    },
  ]

  // 테이블 컬럼 정의
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "제목", accessor: "title" },
    { header: "유형", accessor: "type" },
    { header: "시작일", accessor: "startDate" },
    { header: "종료일", accessor: "endDate" },
    {
      header: "상태",
      accessor: "status",
      cell: (value: string) => (
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
            value === "활성"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : value === "예정"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
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
        <h1 className="text-2xl font-bold tracking-tight">공지 및 이벤트</h1>
        <p className="text-muted-foreground">앱 내 공지사항과 이벤트 팝업을 관리하세요.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              공지사항
            </h2>
            <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" />
              공지사항 추가
            </button>
          </div>
          <DataTable columns={columns} data={notices} />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              이벤트 팝업
            </h2>
            <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" />
              팝업 추가
            </button>
          </div>
          <DataTable columns={columns} data={popups} />
        </div>
      </div>
    </div>
  )
}

