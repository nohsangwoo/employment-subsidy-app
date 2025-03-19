import { ChartCard } from "@/components/admin/chart-card"
import { StatCard } from "@/components/admin/stat-card"
import { DataTable } from "@/components/admin/data-table"
import { BarChart3, Users, Clock, Download, Calendar } from "lucide-react"

export default function AnalyticsPage() {
  // 인기 페이지 데이터
  const popularPages = [
    {
      page: "홈",
      views: 45678,
      uniqueVisitors: 12345,
      avgTimeOnPage: "2분 30초",
      bounceRate: "25%",
    },
    {
      page: "고용장려금 안내",
      views: 23456,
      uniqueVisitors: 7890,
      avgTimeOnPage: "3분 45초",
      bounceRate: "20%",
    },
    {
      page: "신청절차 안내",
      views: 12345,
      uniqueVisitors: 4567,
      avgTimeOnPage: "4분 15초",
      bounceRate: "15%",
    },
    {
      page: "보조금 자격 조회",
      views: 9876,
      uniqueVisitors: 3456,
      avgTimeOnPage: "5분 30초",
      bounceRate: "10%",
    },
    {
      page: "고용채움 안내",
      views: 8765,
      uniqueVisitors: 2345,
      avgTimeOnPage: "2분 15초",
      bounceRate: "30%",
    },
  ]

  // 테이블 컬럼 정의
  const columns = [
    { header: "페이지", accessor: "page" },
    {
      header: "조회수",
      accessor: "views",
      cell: (value: number) => value.toLocaleString(),
    },
    {
      header: "순 방문자",
      accessor: "uniqueVisitors",
      cell: (value: number) => value.toLocaleString(),
    },
    { header: "평균 체류 시간", accessor: "avgTimeOnPage" },
    { header: "이탈률", accessor: "bounceRate" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">통계 및 분석</h1>
        <p className="text-muted-foreground">앱 사용 통계와 사용자 행동 분석 데이터를 확인하세요.</p>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">기간:</span>
          <select className="rounded-md border px-3 py-1 text-sm">
            <option>최근 7일</option>
            <option>최근 30일</option>
            <option>최근 90일</option>
            <option>올해</option>
            <option>전체 기간</option>
          </select>
        </div>
        <button className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium">
          <Download className="mr-2 h-4 w-4" />
          보고서 다운로드
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="총 방문자"
          value="45,678"
          change="12.7%"
          isPositive={true}
          icon={Users}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        />
        <StatCard
          title="페이지뷰"
          value="123,456"
          change="8.3%"
          isPositive={true}
          icon={BarChart3}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        />
        <StatCard
          title="평균 체류 시간"
          value="3분 45초"
          change="5.2%"
          isPositive={true}
          icon={Clock}
          iconColor="text-orange-600"
          iconBgColor="bg-orange-100"
        />
        <StatCard
          title="일일 활성 사용자"
          value="5,432"
          change="15.8%"
          isPositive={true}
          icon={Calendar}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard title="방문자 추이">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>차트 데이터 로딩 중...</p>
              <p className="text-xs">실제 구현 시 차트 라이브러리 사용</p>
            </div>
          </div>
        </ChartCard>
        <ChartCard title="사용자 행동 분석">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>차트 데이터 로딩 중...</p>
              <p className="text-xs">실제 구현 시 차트 라이브러리 사용</p>
            </div>
          </div>
        </ChartCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">인기 페이지</h2>
        <DataTable columns={columns} data={popularPages} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard title="기기별 사용자 분포">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>차트 데이터 로딩 중...</p>
              <p className="text-xs">실제 구현 시 차트 라이브러리 사용</p>
            </div>
          </div>
        </ChartCard>
        <ChartCard title="사용자 유입 경로">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>차트 데이터 로딩 중...</p>
              <p className="text-xs">실제 구현 시 차트 라이브러리 사용</p>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  )
}

