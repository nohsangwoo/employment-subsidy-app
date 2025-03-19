import { MobileHeader } from "@/components/mobile-header"

export default function ApplicationProcedureGuidePage() {
  const steps = [
    {
      number: 1,
      title: "자격 확인",
      description:
        "지원 자격 요건을 확인합니다. 각 보조금 및 지원금마다 자격 요건이 다를 수 있으므로 상세히 확인하세요.",
      details: [
        "연령, 고용 상태, 소득 수준 등 기본 자격 확인",
        "특정 대상(청년, 여성, 장애인 등)에 따른 추가 자격 확인",
        "사업주의 경우 기업 규모, 업종, 고용보험 가입 여부 등 확인",
      ],
    },
    {
      number: 2,
      title: "본인 인증",
      description: "신청자 본인 확인을 위한 인증 절차를 진행합니다.",
      details: [
        "개인정보 인증: 이름, 주민등록번호 등 개인정보 입력",
        "휴대폰 인증: SMS를 통한 본인 확인",
        "공동인증서: 공동인증서(구 공인인증서)를 통한 인증",
      ],
    },
    {
      number: 3,
      title: "신청서 작성",
      description: "온라인 또는 오프라인으로 신청서를 작성합니다.",
      details: ["개인 정보 및 연락처 입력", "신청 보조금 종류 선택", "계좌 정보 입력", "추가 정보 및 질문 응답"],
    },
    {
      number: 4,
      title: "증빙 서류 제출",
      description: "신청 자격을 증명하는 서류를 제출합니다.",
      details: [
        "신분증 사본",
        "소득 증빙 서류(근로소득 원천징수영수증, 소득금액증명원 등)",
        "고용 관련 서류(근로계약서, 재직증명서 등)",
        "기타 자격 증빙 서류(장애인 증명서, 가족관계증명서 등)",
      ],
    },
    {
      number: 5,
      title: "신청 접수 및 심사",
      description: "제출된 신청서와 서류를 바탕으로 심사가 진행됩니다.",
      details: ["서류 검토 및 자격 확인", "필요시 추가 서류 요청 또는 현장 실사", "심사 결과 판정"],
    },
    {
      number: 6,
      title: "결과 통보 및 지급",
      description: "심사 결과를 통보받고, 승인 시 지원금이 지급됩니다.",
      details: ["SMS 또는 이메일로 결과 통보", "승인 시 지정 계좌로 지원금 입금", "지급 일정 및 방식 안내"],
    },
  ]

  return (
    <>
      <MobileHeader title="신청절차 안내" showBackButton backUrl="/guides" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">신청절차 안내</h1>
          <p className="text-sm text-muted-foreground">고용 보조금 및 지원금 신청 절차에 대한 상세 안내입니다.</p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">신청 절차 개요</h2>
            <p className="text-xs">
              고용 보조금 및 지원금 신청은 일반적으로 아래의 절차를 따릅니다. 각 지원 제도별로 세부 절차나 필요 서류가
              다를 수 있으므로, 해당 지원금의 구체적인 안내를 참고하시기 바랍니다.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-8 pb-4 border-l-2 border-red-200 last:border-l-0 last:pb-0">
                <div className="absolute left-[-14px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold">
                  {step.number}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-red-600">{step.title}</h3>
                  <p className="text-xs">{step.description}</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-xs text-muted-foreground">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">신청 방법</h2>
            <div className="space-y-2">
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">온라인 신청</h3>
                <p className="mt-1 text-xs">
                  고용노동부 홈페이지, 고용보험 홈페이지, 워크넷 등 관련 웹사이트를 통해 온라인으로 신청할 수 있습니다.
                </p>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">방문 신청</h3>
                <p className="mt-1 text-xs">
                  가까운 고용센터를 방문하여 직접 신청할 수 있습니다. 필요 서류를 지참하고 방문하시기 바랍니다.
                </p>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">우편 신청</h3>
                <p className="mt-1 text-xs">
                  신청서와 증빙 서류를 준비하여 관할 고용센터로 우편 발송하여 신청할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">자주 묻는 질문</h2>
            <div className="space-y-2">
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">신청 후 결과는 언제 알 수 있나요?</h3>
                <p className="mt-1 text-xs">
                  일반적으로 신청 접수 후 2~4주 내에 결과가 통보됩니다. 단, 신청 건수가 많거나 추가 확인이 필요한 경우
                  더 오래 걸릴 수 있습니다.
                </p>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">한 번에 여러 보조금을 신청할 수 있나요?</h3>
                <p className="mt-1 text-xs">
                  보조금 종류에 따라 중복 신청이 제한될 수 있습니다. 각 보조금의 중복 지원 여부를 사전에 확인하시기
                  바랍니다.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-red-50 p-3">
            <h3 className="text-sm font-medium">문의 및 상담</h3>
            <div className="mt-1 space-y-0.5 text-xs">
              <p>고용노동부 고객상담센터: 1350 (평일 09:00 ~ 18:00)</p>
              <p>고용보험 홈페이지: www.ei.go.kr</p>
              <p>워크넷: www.work.go.kr</p>
              <p>가까운 고용센터에 방문하시면 더 상세한 안내를 받으실 수 있습니다.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

