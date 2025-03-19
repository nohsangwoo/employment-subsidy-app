"use client"

import { Users, FileCheck, TrendingUp, BarChart3 } from "lucide-react"
import { StatCard } from "@/components/admin/stat-card"
import { ChartCard } from "@/components/admin/chart-card"
import { DataTable } from "@/components/admin/data-table"

export default function AdminDashboard() {
  // 최근 장려금 신청 데이터
  const recentApplications = [
    {
      id: "APP-1234",
      name: "홍길동",
      type: "청년 고용장려금",
      status: "승인",
      date: "2025-03-19",
      amount: "₩800,000",
    },
    {
      id: "APP-1235",
      name: "김철수",
      type: "중장년 재취업 지원금",
      status: "심사중",
      date: "2025-03-18",
      amount: "₩500,000",
    },
    {
      id: "APP-1236",
      name: "이영희",
      type: "경력단절여성 재취업 장려금",
      status: "거부",
      date: "2025-03-17",
      amount: "₩600,000",
    },
    {
      id: "APP-1237",
      name: "박민수",
      type: "청년 고용장려금",
      status: "승인",
      date: "2025-03-16",
      amount: "₩800,000",
    },
    {
      id: "APP-1238",
      name: "정지원",
      type: "중장년 재취업 지원금",
      status: "심사중",
      date: "2025-03-15",
      amount: "₩500,000",
    },
  ]

  // 최근 사용자 활동 데이터
  const recentActivities = [
    {
      user: "홍길동",
      action: "로그인",
      time: "10분 전",
      device: "모바일",
    },
    {
      user: "김철수",
      action: "장려금 신청",
      time: "30분 전",
      device: "데스크톱",
    },
    {
      user: "이영희",
      action: "자격 조회",
      time: "1시간 전",
      device: "모바일",
    },
    {
      user: "박민수",
      action: "회원가입",
      time: "2시간 전",
      device: "모바일",
    },
    {
      user: "정지원",
      action: "장려금 신청",
      time: "3시간 전",
      device: "데스크톱",
    },
  ]

  // 테이블 컬럼 정의
  const applicationColumns = [
    { header: "신청 ID", accessor: "id" },
    { header: "신청자", accessor: "name" },
    { header: "장려금 유형", accessor: "type" },
    {
      header: "상태",
      accessor: "status",
      cell: (value: string) => (
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
            value === "승인"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : value === "거부"
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
          }`}
        >
          {value}
        </span>
      ),
    },
    { header: "신청일", accessor: "date" },
    { header: "금액", accessor: "amount" },
  ]

  const activityColumns = [
    { header: "사용자", accessor: "user" },
    { header: "활동", accessor: "action" },
    { header: "시간", accessor: "time" },
    {
      header: "기기",
      accessor: "device",
      cell: (value: string) => (
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
            value === "모바일"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
          }`}
        >
          {value}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">고용 보조금 앱의 주요 지표와 활동을 확인하세요.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="총 사용자"
          value="12,345"
          change="5.2%"
          isPositive={true}
          icon={Users}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        />
        <StatCard
          title="장려금 신청"
          value="1,234"
          change="3.1%"
          isPositive={true}
          icon={FileCheck}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        />
        <StatCard
          title="승인율"
          value="78.5%"
          change="2.3%"
          isPositive={false}
          icon={TrendingUp}
          iconColor="text-orange-600"
          iconBgColor="bg-orange-100"
        />
        <StatCard
          title="월간 방문자"
          value="45,678"
          change="12.7%"
          isPositive={true}
          icon={BarChart3}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard title="장려금 유형별 신청 현황">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>차트 데이터 로딩 중...</p>
              <p className="text-xs">실제 구현 시 차트 라이브러리 사용</p>
            </div>
          </div>
        </ChartCard>
        <ChartCard title="월별 신청 및 승인 추이">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>차트 데이터 로딩 중...</p>
              <p className="text-xs">실제 구현 시 차트 라이브러리 사용</p>
            </div>
          </div>
        </ChartCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <DataTable title="최근 장려금 신청" columns={applicationColumns} data={recentApplications} />
        <DataTable title="최근 사용자 활동" columns={activityColumns} data={recentActivities} />
      </div>
    </div>
  )
}

