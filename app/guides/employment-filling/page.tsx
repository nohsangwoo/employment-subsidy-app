import { MobileHeader } from "@/components/mobile-header"
import { CheckCircle } from "lucide-react"

export default function EmploymentFillingGuidePage() {
  return (
    <>
      <MobileHeader title="고용채움 안내" showBackButton backUrl="/guides" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">고용채움 안내</h1>
          <p className="text-sm text-muted-foreground">고용채움 서비스의 개요 및 이용 방법에 대한 안내입니다.</p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">고용채움이란?</h2>
            <p className="text-xs">
              고용채움은 고용노동부에서 제공하는 고용 지원 서비스로, 구직자와 기업을 연결하고 다양한 고용 지원
              프로그램을 제공합니다. 이 서비스는 취업 준비생, 실직자, 경력단절자 등 다양한 구직자들에게 맞춤형 취업
              지원을 제공하며, 기업에게는 인재 채용 및 고용 유지를 위한 다양한 지원을 제공합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">주요 서비스</h2>
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">취업 지원 서비스</h3>
                    <p className="text-xs text-muted-foreground">
                      구직자 맞춤형 취업 상담, 직업 훈련, 취업 알선 등 종합적인 취업 지원 서비스를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">고용 유지 지원</h3>
                    <p className="text-xs text-muted-foreground">
                      기업의 고용 유지를 위한 다양한 지원금 및 프로그램을 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">직업 능력 개발</h3>
                    <p className="text-xs text-muted-foreground">
                      구직자 및 재직자의 직업 능력 향상을 위한 다양한 교육 및 훈련 프로그램을 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">취약계층 지원</h3>
                    <p className="text-xs text-muted-foreground">
                      청년, 여성, 장애인, 고령자 등 취약계층을 위한 특화된 고용 지원 서비스를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">이용 방법</h2>
            <ol className="list-decimal pl-5 space-y-2 text-xs">
              <li>
                <p className="font-medium">회원 가입</p>
                <p>고용채움 웹사이트 또는 모바일 앱에서 회원 가입을 합니다.</p>
              </li>
              <li>
                <p className="font-medium">본인 인증</p>
                <p>개인정보 인증, 휴대폰 인증 또는 공동인증서를 통해 본인 확인을 합니다.</p>
              </li>
              <li>
                <p className="font-medium">서비스 신청</p>
                <p>원하는 서비스를 선택하고 필요한 정보를 입력하여 신청합니다.</p>
              </li>
              <li>
                <p className="font-medium">상담 및 지원</p>
                <p>담당 상담사의 안내에 따라 맞춤형 지원 서비스를 받습니다.</p>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">문의 및 상담</h2>
            <div className="rounded-md bg-blue-50 p-3">
              <div className="space-y-1">
                <p className="text-sm font-medium">고용채움 고객센터</p>
                <p className="text-xs">전화: 1350 (평일 09:00 ~ 18:00)</p>
                <p className="text-xs">이메일: help@employment.go.kr</p>
                <p className="text-xs">웹사이트: www.employment.go.kr</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

