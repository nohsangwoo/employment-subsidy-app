"use client"

import { MobileHeader } from "@/components/mobile-header"
import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/contexts/auth-context"
import { useState } from "react"
import { Search, FileText, CheckCircle } from "lucide-react"

export default function InquiryPage() {
  return (
    <ProtectedRoute>
      <InquiryContent />
    </ProtectedRoute>
  )
}

function InquiryContent() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<"eligibility" | "history">("eligibility")
  const [searchQuery, setSearchQuery] = useState("")

  const eligibilityData = [
    {
      id: "subsidy1",
      name: "청년 고용장려금",
      status: "적격",
      description: "만 34세 이하 청년 구직자 대상 고용 지원금",
      amount: "월 최대 80만원",
      period: "최대 12개월",
    },
    {
      id: "subsidy2",
      name: "경력단절여성 재취업 장려금",
      status: "부적격",
      description: "경력단절 여성의 재취업을 지원하는 장려금",
      amount: "월 최대 60만원",
      period: "최대 12개월",
      reason: "경력단절 기간이 6개월 미만",
    },
    {
      id: "subsidy3",
      name: "중장년 재취업 지원금",
      status: "심사중",
      description: "만 40세 이상 중장년층 재취업 지원금",
      amount: "월 최대 50만원",
      period: "최대 6개월",
      submittedDate: "2025-03-15",
    },
  ]

  const historyData = [
    {
      id: "history1",
      subsidyName: "청년 고용장려금",
      status: "지급완료",
      amount: "960만원",
      period: "2024-04-01 ~ 2025-03-31",
      paymentDate: "매월 25일",
    },
    {
      id: "history2",
      subsidyName: "직업훈련 지원금",
      status: "지급중",
      amount: "월 30만원",
      period: "2025-01-01 ~ 2025-06-30",
      paymentDate: "매월 15일",
      nextPayment: "2025-04-15",
    },
  ]

  return (
    <>
      <MobileHeader title="보조금 자격 조회" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">보조금 자격 조회</h1>
            <div className="text-sm text-primary font-medium">{user?.name}님</div>
          </div>
          <p className="text-sm text-muted-foreground">고용 보조금 자격 및 수급 내역을 조회할 수 있습니다.</p>
        </section>

        <div className="flex border-b mb-4">
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "eligibility" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("eligibility")}
          >
            자격 조회
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "history" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("history")}
          >
            수급 내역
          </button>
        </div>

        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={activeTab === "eligibility" ? "보조금 이름으로 검색" : "내역 검색"}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {activeTab === "eligibility" ? (
          <div className="space-y-4">
            {eligibilityData.map((item) => (
              <div key={item.id} className="rounded-lg border bg-card p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <div
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.status === "적격"
                        ? "bg-green-100 text-green-800"
                        : item.status === "부적격"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-muted-foreground">지원 금액</p>
                    <p className="font-medium">{item.amount}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">지원 기간</p>
                    <p className="font-medium">{item.period}</p>
                  </div>
                </div>
                {item.status === "부적격" && item.reason && (
                  <div className="mt-3 p-2 bg-red-50 text-red-800 text-xs rounded">
                    <p className="font-medium">부적격 사유:</p>
                    <p>{item.reason}</p>
                  </div>
                )}
                {item.status === "심사중" && item.submittedDate && (
                  <div className="mt-3 p-2 bg-yellow-50 text-yellow-800 text-xs rounded">
                    <p className="font-medium">신청일: {item.submittedDate}</p>
                    <p>심사 결과는 신청일로부터 약 2주 내에 안내됩니다.</p>
                  </div>
                )}
                {item.status === "적격" && (
                  <button className="mt-3 w-full rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
                    신청하기
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {historyData.map((item) => (
              <div key={item.id} className="rounded-lg border bg-card p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.subsidyName}</h3>
                  <div
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.status === "지급완료" ? "bg-gray-100 text-gray-800" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div>
                    <p className="text-muted-foreground">지원 금액</p>
                    <p className="font-medium">{item.amount}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">지원 기간</p>
                    <p className="font-medium">{item.period}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">지급일</p>
                    <p className="font-medium">{item.paymentDate}</p>
                  </div>
                  {item.nextPayment && (
                    <div>
                      <p className="text-muted-foreground">다음 지급일</p>
                      <p className="font-medium">{item.nextPayment}</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <button className="flex items-center gap-1 text-xs text-primary">
                    <FileText className="h-3 w-3" />
                    지급 내역서
                  </button>
                  <button className="flex items-center gap-1 text-xs text-primary">
                    <CheckCircle className="h-3 w-3" />
                    수급 확인서
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

