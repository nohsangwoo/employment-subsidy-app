import { MobileHeader } from "@/components/mobile-header"

export default function EmploymentIncentiveGuidePage() {
  const incentives = [
    {
      title: "고용창출장려금",
      description: "신규 일자리 창출을 위해 노력하는 사업주에게 지원하는 장려금",
      eligibility: "중소기업 사업주, 취약계층 고용 사업주",
      amount: "신규 채용 1인당 월 30~100만원, 최대 1년간 지원",
      process: "고용보험 홈페이지 또는 관할 고용센터에서 신청",
    },
    {
      title: "고용안정장려금",
      description: "재직 근로자의 고용 안정을 위해 노력하는 사업주에게 지원하는 장려금",
      eligibility: "일자리 함께하기, 정규직 전환, 워라밸 지원 등을 실시하는 사업주",
      amount: "유형별 상이, 근로자 1인당 월 30~80만원 지원",
      process: "고용보험 홈페이지 또는 관할 고용센터에서 신청",
    },
    {
      title: "고용유지지원금",
      description: "경영 악화로 고용 조정이 불가피한 사업주가 고용 유지 조치를 하는 경우 지원",
      eligibility: "매출액 감소 등 경영 악화로 고용 조정이 불가피한 사업주",
      amount: "휴업·휴직 수당의 2/3(대규모기업 1/2~2/3) 지원",
      process: "고용유지조치 계획서 제출 후 실시, 사후 지원금 신청",
    },
    {
      title: "청년 디지털 일자리 사업",
      description: "중소·중견기업이 청년을 채용하여 디지털 직무에 배치하는 경우 지원",
      eligibility: "만 15~34세 청년을 채용한 중소·중견기업",
      amount: "월 최대 180만원, 최대 6개월간 지원",
      process: "청년 디지털 일자리 사업 홈페이지에서 신청",
    },
  ]

  return (
    <>
      <MobileHeader title="고용장려금 안내" showBackButton backUrl="/guides" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">고용장려금 안내</h1>
          <p className="text-sm text-muted-foreground">다양한 고용장려금 제도 및 지원 내용에 대한 안내입니다.</p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">고용장려금이란?</h2>
            <p className="text-xs">
              고용장려금은 기업의 고용 창출과 안정을 지원하기 위해 정부에서 제공하는 재정적 지원 제도입니다. 신규 일자리
              창출, 고용 유지, 근로 환경 개선 등 다양한 목적으로 사업주에게 지원됩니다. 이를 통해 기업의 인건비 부담을
              줄이고, 양질의 일자리 창출을 촉진하며, 취약계층의 고용 기회를 확대하는 효과가 있습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">주요 고용장려금 제도</h2>
            <div className="space-y-3">
              {incentives.map((incentive, index) => (
                <div key={index} className="rounded-md border p-3">
                  <h3 className="text-sm font-medium text-green-600">{incentive.title}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs">
                      <span className="font-medium">설명:</span> {incentive.description}
                    </p>
                    <p className="text-xs">
                      <span className="font-medium">지원 대상:</span> {incentive.eligibility}
                    </p>
                    <p className="text-xs">
                      <span className="font-medium">지원 금액:</span> {incentive.amount}
                    </p>
                    <p className="text-xs">
                      <span className="font-medium">신청 방법:</span> {incentive.process}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">신청 시 유의사항</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>장려금별로 신청 기한이 상이하므로 반드시 확인 필요</li>
              <li>부정수급 시 지원금 환수 및 추가 제재 조치 가능</li>
              <li>동일한 근로자에 대해 중복 지원이 제한될 수 있음</li>
              <li>사업주의 고용보험 가입 및 보험료 납부가 전제 조건</li>
              <li>지원 요건 및 금액은 정책 변경에 따라 달라질 수 있음</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">문의 및 상담</h2>
            <div className="rounded-md bg-green-50 p-3">
              <div className="space-y-1">
                <p className="text-sm font-medium">고용장려금 상담센터</p>
                <p className="text-xs">전화: 1350 (평일 09:00 ~ 18:00)</p>
                <p className="text-xs">웹사이트: www.ei.go.kr (고용보험 홈페이지)</p>
                <p className="text-xs">방문: 전국 고용센터 (사전 예약 권장)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

