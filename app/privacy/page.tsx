import { MobileHeader } from "@/components/mobile-header"

export default function PrivacyPolicyPage() {
  return (
    <>
      <MobileHeader title="개인정보 처리방침" showBackButton backUrl="/settings" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">개인정보 처리방침</h1>
          <p className="text-sm text-muted-foreground">
            고용 보조금 앱의 개인정보 처리방침입니다. 최종 업데이트: 2025년 3월 19일
          </p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">1. 개인정보의 처리 목적</h2>
            <p className="text-xs">
              고용노동부('고용 보조금 앱')은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의
              목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의
              동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>고용 보조금 신청 및 지급을 위한 본인 확인</li>
              <li>고용 보조금 자격 심사 및 관리</li>
              <li>고용 정책 수립 및 연구 통계 자료 활용</li>
              <li>민원 처리 및 소통 채널 확보</li>
              <li>서비스 개선을 위한 이용 행태 분석</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">2. 수집하는 개인정보 항목</h2>
            <p className="text-xs">고용 보조금 앱은 다음과 같은 개인정보 항목을 수집하고 있습니다.</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>필수항목: 성명, 생년월일, 성별, 연락처, 이메일, 주소, 계좌정보</li>
              <li>선택항목: 직업, 학력, 경력사항, 자격증</li>
              <li>자동수집항목: IP주소, 쿠키, 방문 일시, 서비스 이용 기록, 기기정보</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">3. 개인정보의 보유 및 이용기간</h2>
            <p className="text-xs">
              고용 보조금 앱은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보 수집 시 동의받은 개인정보
              보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>회원 정보: 회원 탈퇴 시까지 (단, 관계 법령에 따라 필요한 경우 해당 법령에서 정한 기간까지)</li>
              <li>보조금 신청 정보: 보조금 지급 종료 후 5년</li>
              <li>민원 처리 정보: 민원 처리 완료 후 3년</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">4. 개인정보의 제3자 제공</h2>
            <p className="text-xs">
              고용 보조금 앱은 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는
              경우에만 개인정보를 제3자에게 제공합니다.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>제공받는 자: 국민건강보험공단, 국민연금공단, 근로복지공단</li>
              <li>제공 목적: 보조금 자격 확인 및 중복 수급 방지</li>
              <li>제공 항목: 성명, 생년월일, 성별, 보조금 신청 정보</li>
              <li>보유 기간: 제공 목적 달성 시까지</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">5. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-xs">
              정보주체는 고용 보조금 앱에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="text-xs">
              권리 행사는 고용 보조금 앱에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 고용
              보조금 앱은 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">6. 개인정보 보호책임자</h2>
            <p className="text-xs">
              고용 보조금 앱은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리
              및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="p-3 rounded-md bg-primary/10">
              <p className="text-xs font-medium">개인정보 보호책임자</p>
              <p className="text-xs">성명: 홍길동</p>
              <p className="text-xs">직책: 개인정보보호팀장</p>
              <p className="text-xs">연락처: 02-1234-5678, privacy@employment.go.kr</p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">7. 개인정보 처리방침 변경</h2>
            <p className="text-xs">
              이 개인정보 처리방침은 2025년 3월 19일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이
              있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

