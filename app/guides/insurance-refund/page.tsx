import { MobileHeader } from "@/components/mobile-header"
import { AlertCircle } from "lucide-react"

export default function InsuranceRefundGuidePage() {
  return (
    <>
      <MobileHeader title="4대보험환급 안내" showBackButton backUrl="/guides" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">4대보험환급 안내</h1>
          <p className="text-sm text-muted-foreground">4대 사회보험 환급 절차 및 자격 요건에 대한 안내입니다.</p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">4대 사회보험이란?</h2>
            <p className="text-xs">
              4대 사회보험은 국민연금, 건강보험, 고용보험, 산재보험을 말합니다. 이는 사회 구성원의 생활 안정과 복지
              증진을 위해 국가에서 시행하는 사회보장제도로, 근로자와 사업주가 공동으로 보험료를 부담하는 것이
              원칙입니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">4대 보험 환급 사유</h2>
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium text-orange-600">국민연금 환급</h3>
                <ul className="mt-1 list-disc pl-5 space-y-0.5 text-xs">
                  <li>국적 상실 및 국외 이주</li>
                  <li>사망</li>
                  <li>장애연금 수급권 취득</li>
                  <li>보험료 이중 납부</li>
                  <li>착오 납부</li>
                </ul>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium text-orange-600">건강보험 환급</h3>
                <ul className="mt-1 list-disc pl-5 space-y-0.5 text-xs">
                  <li>보험료 이중 납부</li>
                  <li>착오 납부</li>
                  <li>소득 변경에 따른 정산</li>
                  <li>자격 상실 후 납부</li>
                </ul>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium text-orange-600">고용보험 환급</h3>
                <ul className="mt-1 list-disc pl-5 space-y-0.5 text-xs">
                  <li>보험료 이중 납부</li>
                  <li>착오 납부</li>
                  <li>근로자 퇴사 후 정산</li>
                  <li>고용보험 미가입 대상자 납부</li>
                </ul>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium text-orange-600">산재보험 환급</h3>
                <ul className="mt-1 list-disc pl-5 space-y-0.5 text-xs">
                  <li>보험료 이중 납부</li>
                  <li>착오 납부</li>
                  <li>확정 보험료 정산 후 환급</li>
                  <li>산재보험 미가입 대상자 납부</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">환급 신청 방법</h2>
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">국민연금 환급 신청</h3>
                <p className="mt-1 text-xs">
                  <span className="font-medium">신청 방법:</span> 국민연금공단 지사 방문, 우편, 인터넷(www.nps.or.kr)
                </p>
                <p className="text-xs">
                  <span className="font-medium">필요 서류:</span> 신청서, 신분증, 통장 사본, 환급 사유 증빙 서류
                </p>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">건강보험 환급 신청</h3>
                <p className="mt-1 text-xs">
                  <span className="font-medium">신청 방법:</span> 국민건강보험공단 지사 방문, 우편,
                  인터넷(www.nhis.or.kr)
                </p>
                <p className="text-xs">
                  <span className="font-medium">필요 서류:</span> 신청서, 신분증, 통장 사본, 환급 사유 증빙 서류
                </p>
              </div>
              <div className="rounded-md border p-3">
                <h3 className="text-sm font-medium">고용보험 및 산재보험 환급 신청</h3>
                <p className="mt-1 text-xs">
                  <span className="font-medium">신청 방법:</span> 근로복지공단 지사 방문, 우편,
                  인터넷(www.kcomwel.or.kr)
                </p>
                <p className="text-xs">
                  <span className="font-medium">필요 서류:</span> 신청서, 신분증, 통장 사본, 환급 사유 증빙 서류
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-orange-50 p-3 flex gap-2">
            <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="text-sm font-medium">유의사항</h3>
              <ul className="list-disc pl-5 space-y-0.5 text-xs">
                <li>환급 신청은 보험료 납부일로부터 3년 이내에 해야 합니다.</li>
                <li>환급금은 신청 후 약 2~4주 내에 지정 계좌로 입금됩니다.</li>
                <li>환급 사유에 따라 필요 서류가 다를 수 있으니 사전에 확인하세요.</li>
                <li>국민연금의 경우, 반환일시금 수령 시 향후 연금 수급권이 상실될 수 있습니다.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">문의 및 상담</h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-medium">국민연금</p>
                <p>전화: 1355</p>
                <p>웹사이트: www.nps.or.kr</p>
              </div>
              <div>
                <p className="font-medium">건강보험</p>
                <p>전화: 1577-1000</p>
                <p>웹사이트: www.nhis.or.kr</p>
              </div>
              <div>
                <p className="font-medium">고용보험</p>
                <p>전화: 1350</p>
                <p>웹사이트: www.ei.go.kr</p>
              </div>
              <div>
                <p className="font-medium">산재보험</p>
                <p>전화: 1588-0075</p>
                <p>웹사이트: www.kcomwel.or.kr</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

