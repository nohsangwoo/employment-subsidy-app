import { MobileHeader } from "@/components/mobile-header"
import { BookOpen, FileText, Users, Briefcase } from "lucide-react"

export default function EmploymentSystemGuidePage() {
  return (
    <>
      <MobileHeader title="고용제도 안내" showBackButton backUrl="/guides" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">고용제도 안내</h1>
          <p className="text-sm text-muted-foreground">고용 관련 제도 및 정책에 대한 종합적인 안내입니다.</p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">한국의 고용제도 개요</h2>
            <p className="text-xs">
              한국의 고용제도는 근로기준법, 고용보험법, 산업재해보상보험법 등 다양한 법률에 기반하여 운영되고 있습니다.
              이러한 제도들은 근로자의 권리 보호, 고용 안정, 직업 능력 개발, 실업 대책 등을 목적으로 하며, 고용노동부를
              중심으로 다양한 정책과 지원 프로그램이 시행되고 있습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">주요 고용제도</h2>
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">고용보험제도</h3>
                    <p className="text-xs text-muted-foreground">
                      실업급여, 직업능력개발, 고용안정 등을 지원하는 사회보험제도입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">근로기준법</h3>
                    <p className="text-xs text-muted-foreground">
                      근로조건의 기준을 정하여 근로자의 기본적 생활을 보장하는 법률입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">최저임금제도</h3>
                    <p className="text-xs text-muted-foreground">
                      근로자의 생활안정과 노동력의 질적 향상을 위해 임금의 최저수준을 보장하는 제도입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-start gap-2">
                  <Briefcase className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">직업능력개발제도</h3>
                    <p className="text-xs text-muted-foreground">
                      근로자의 직업능력 향상을 위한 교육훈련 및 지원 제도입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">고용정책 방향</h2>
            <div className="space-y-2 text-xs">
              <div className="rounded-md bg-purple-50 p-3">
                <h3 className="font-medium">일자리 창출 및 고용 안정</h3>
                <p className="mt-1">
                  양질의 일자리 창출을 위한 기업 지원 및 고용 안정을 위한 다양한 정책을 추진하고 있습니다. 중소기업
                  지원, 창업 활성화, 고용 유지 지원 등이 포함됩니다.
                </p>
              </div>
              <div className="rounded-md bg-purple-50 p-3">
                <h3 className="font-medium">취약계층 고용 지원</h3>
                <p className="mt-1">
                  청년, 여성, 고령자, 장애인 등 취약계층의 고용 촉진을 위한 맞춤형 지원 정책을 시행하고 있습니다. 취업
                  지원 서비스, 고용 장려금, 직업 훈련 등이 제공됩니다.
                </p>
              </div>
              <div className="rounded-md bg-purple-50 p-3">
                <h3 className="font-medium">일·생활 균형 지원</h3>
                <p className="mt-1">
                  근로시간 단축, 유연근무제 확대, 육아휴직 활성화 등을 통해 일과 생활의 균형을 지원하는 정책을 추진하고
                  있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">관련 법령 및 자료</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>근로기준법</li>
              <li>고용보험법</li>
              <li>산업재해보상보험법</li>
              <li>직업안정법</li>
              <li>최저임금법</li>
              <li>남녀고용평등과 일·가정 양립 지원에 관한 법률</li>
            </ul>
            <p className="text-xs">자세한 내용은 고용노동부 홈페이지(www.moel.go.kr)에서 확인하실 수 있습니다.</p>
          </div>
        </div>
      </main>
    </>
  )
}

