import { MobileHeader } from "@/components/mobile-header"

export default function GuidelinesPage() {
  return (
    <>
      <MobileHeader title="가이드라인" showBackButton />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">고용 지원 가이드라인</h1>
          <p className="text-sm text-muted-foreground">고용 지원 프로그램 신청 및 이용에 관한 상세 가이드라인입니다.</p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">지원 자격</h2>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">기본 자격 요건</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>대한민국 국적 보유자</li>
                <li>만 18세 이상 만 65세 미만</li>
                <li>고용보험 가입 이력이 있는 자</li>
                <li>실업 상태이거나 구직 활동 중인 자</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">우대 조건</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>장기 실업자 (6개월 이상)</li>
                <li>취업 취약계층</li>
                <li>경력단절여성</li>
                <li>청년 구직자 (만 18세 이상 만 34세 이하)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">신청 절차</h2>
            <ol className="list-decimal pl-5 space-y-2 text-xs">
              <li>
                <p className="font-medium">본인 인증</p>
                <p>개인정보 인증, 휴대폰 인증 또는 공동인증서를 통해 본인 확인</p>
              </li>
              <li>
                <p className="font-medium">자격 조회</p>
                <p>고용보험 이력 및 지원 자격 확인</p>
              </li>
              <li>
                <p className="font-medium">신청서 작성</p>
                <p>필요 정보 입력 및 증빙 서류 제출</p>
              </li>
              <li>
                <p className="font-medium">심사 및 결과 통보</p>
                <p>접수 후 약 2주 이내 심사 결과 통보 (문자 또는 이메일)</p>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">지원금 수령</h2>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">지급 방식</h3>
              <p className="text-xs">신청자 명의 계좌로 매월 25일 지급</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">지원 기간</h3>
              <p className="text-xs">최대 6개월 (조건에 따라 연장 가능)</p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">의무 사항</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>월 1회 이상 구직활동 보고서 제출</li>
              <li>취업 성공 시 즉시 신고</li>
              <li>주소, 연락처 등 개인정보 변경 시 신고</li>
              <li>정기 교육 및 상담 참여</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">지원 중단 사유</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>취업 또는 창업</li>
              <li>허위 정보 제공 또는 부정 수급</li>
              <li>의무 사항 미이행</li>
              <li>연락 두절 (30일 이상)</li>
              <li>지원 포기 의사 표시</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

