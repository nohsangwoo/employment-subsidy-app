import { MobileHeader } from "@/components/mobile-header"
import { ChevronRight, HelpCircle, MessageCircle, FileText, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const faqs = [
    {
      question: "고용 보조금은 어떤 사람이 받을 수 있나요?",
      answer:
        "고용 보조금은 실업 상태이거나 구직 활동 중인 만 18세 이상 만 65세 미만의 대한민국 국적 보유자로, 고용보험 가입 이력이 있는 자가 받을 수 있습니다. 자세한 자격 요건은 '고용 지원 가이드라인'에서 확인하실 수 있습니다.",
    },
    {
      question: "보조금 신청은 어떻게 하나요?",
      answer:
        "보조금 신청은 본 앱의 '보조금 자격 조회' 메뉴에서 본인 인증 후 진행하실 수 있습니다. 개인정보 인증, 휴대폰 인증, 또는 공동인증서를 통해 본인 확인 후 신청 절차를 진행하시면 됩니다.",
    },
    {
      question: "신청 후 결과는 언제 알 수 있나요?",
      answer:
        "일반적으로 신청 접수 후 2~4주 내에 결과가 통보됩니다. 결과는 SMS 또는 이메일로 안내되며, 앱 내 알림을 통해서도 확인하실 수 있습니다.",
    },
    {
      question: "여러 종류의 보조금을 동시에 신청할 수 있나요?",
      answer:
        "보조금 종류에 따라 중복 신청이 제한될 수 있습니다. 각 보조금의 중복 지원 여부를 사전에 확인하시기 바랍니다. 자세한 내용은 '고용장려금 안내' 페이지에서 확인하실 수 있습니다.",
    },
    {
      question: "보조금 지급 금액은 얼마인가요?",
      answer:
        "보조금 지급 금액은 보조금 종류, 자격 요건, 지원 기간 등에 따라 다릅니다. 각 보조금별 지원 금액은 해당 안내 페이지에서 확인하실 수 있습니다.",
    },
  ]

  return (
    <>
      <MobileHeader title="도움말" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">도움말</h1>
          <p className="text-sm text-muted-foreground">고용 보조금 앱 이용에 관한 도움말 및 자주 묻는 질문입니다.</p>
        </section>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              자주 묻는 질문
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-md border p-3">
                  <h3 className="text-sm font-medium">{faq.question}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              문의하기
            </h2>
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <h3 className="text-sm font-medium">전화 문의</h3>
                    <p className="text-xs text-muted-foreground">1350 (평일 09:00 ~ 18:00)</p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <h3 className="text-sm font-medium">이메일 문의</h3>
                    <p className="text-xs text-muted-foreground">help@employment.go.kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              이용 가이드
            </h2>
            <div className="space-y-3">
              <Link href="/guides" className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center gap-2">
                  <div>
                    <h3 className="text-sm font-medium">안내 가이드</h3>
                    <p className="text-xs text-muted-foreground">고용 보조금 관련 상세 안내</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
              <Link href="/guidelines" className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center gap-2">
                  <div>
                    <h3 className="text-sm font-medium">가이드라인</h3>
                    <p className="text-xs text-muted-foreground">고용 지원 프로그램 신청 및 이용 가이드라인</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </div>
          </div>

          <div className="rounded-md bg-primary/10 p-4 text-center">
            <p className="text-sm font-medium">앱 버전: 1.0.0</p>
            <p className="text-xs text-muted-foreground mt-1">© 2025 고용노동부. All rights reserved.</p>
          </div>
        </div>
      </main>
    </>
  )
}

