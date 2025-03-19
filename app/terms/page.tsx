import { MobileHeader } from "@/components/mobile-header"

export default function TermsOfServicePage() {
  return (
    <>
      <MobileHeader title="이용약관" showBackButton backUrl="/settings" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-xl font-bold tracking-tight">이용약관</h1>
          <p className="text-sm text-muted-foreground">
            고용 보조금 앱의 이용약관입니다. 최종 업데이트: 2025년 3월 19일
          </p>
        </section>

        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제1조 (목적)</h2>
            <p className="text-xs">
              이 약관은 고용노동부(이하 "고용부")가 제공하는 고용 보조금 앱 서비스(이하 "서비스")의 이용조건 및 절차,
              이용자와 고용부의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제2조 (용어의 정의)</h2>
            <p className="text-xs">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ol className="list-decimal pl-5 space-y-1 text-xs">
              <li>"서비스"란 고용부가 제공하는 고용 보조금 앱 및 관련 서비스를 의미합니다.</li>
              <li>"이용자"란 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
              <li>
                "회원"이란 서비스에 개인정보를 제공하여 회원등록을 한 자로서, 서비스의 정보를 지속적으로 제공받으며
                서비스를 이용할 수 있는 자를 말합니다.
              </li>
              <li>"비회원"이란 회원에 가입하지 않고 서비스를 이용하는 자를 말합니다.</li>
              <li>"고용 보조금"이란 고용노동부에서 제공하는 각종 고용 관련 지원금 및 보조금을 의미합니다.</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제3조 (약관의 효력 및 변경)</h2>
            <p className="text-xs">
              ① 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
            </p>
            <p className="text-xs">
              ② 고용부는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로
              공지함으로써 효력이 발생합니다.
            </p>
            <p className="text-xs">
              ③ 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원 탈퇴를 요청할 수 있습니다. 변경된
              약관이 공지된 후 계속해서 서비스를 이용하는 경우에는 약관에 동의한 것으로 간주됩니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제4조 (서비스의 제공 및 변경)</h2>
            <p className="text-xs">① 고용부는 다음과 같은 서비스를 제공합니다.</p>
            <ol className="list-decimal pl-5 space-y-1 text-xs">
              <li>고용 보조금 정보 제공 서비스</li>
              <li>고용 보조금 자격 조회 서비스</li>
              <li>고용 보조금 신청 및 관리 서비스</li>
              <li>고용 관련 정보 제공 서비스</li>
              <li>기타 고용부가 정하는 서비스</li>
            </ol>
            <p className="text-xs">
              ② 고용부는 서비스의 내용, 품질, 또는 기술적 사양 등의 변경이 필요한 경우 서비스의 내용을 변경할 수
              있습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제5조 (서비스 이용시간)</h2>
            <p className="text-xs">
              ① 서비스는 고용부의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 제공함을 원칙으로
              합니다.
            </p>
            <p className="text-xs">
              ② 고용부는 서비스의 일부 또는 전부를 고용부의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며, 이에
              대하여 사전 또는 사후에 공지합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제6조 (회원가입)</h2>
            <p className="text-xs">
              ① 이용자는 고용부가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써
              회원가입을 신청합니다.
            </p>
            <p className="text-xs">
              ② 고용부는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로
              등록합니다.
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-xs">
              <li>가입신청자가 이 약관 제7조에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
              <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
              <li>기타 회원으로 등록하는 것이 서비스 운영상 적절하지 않다고 판단되는 경우</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제7조 (회원 탈퇴 및 자격 상실)</h2>
            <p className="text-xs">
              ① 회원은 고용부에 언제든지 탈퇴를 요청할 수 있으며, 고용부는 즉시 회원탈퇴를 처리합니다.
            </p>
            <p className="text-xs">
              ② 회원이 다음 각 호의 사유에 해당하는 경우, 고용부는 회원자격을 제한 또는 정지시킬 수 있습니다.
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-xs">
              <li>가입 신청 시 허위 내용을 등록한 경우</li>
              <li>서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
              <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제8조 (개인정보보호)</h2>
            <p className="text-xs">
              고용부는 이용자의 개인정보 보호를 위하여 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법령 및
              고용부의 개인정보처리방침이 적용됩니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제9조 (면책조항)</h2>
            <p className="text-xs">
              ① 고용부는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 인하여 서비스를 제공할 수
              없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
            </p>
            <p className="text-xs">
              ② 고용부는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">제10조 (준거법 및 관할법원)</h2>
            <p className="text-xs">
              ① 이 약관의 해석 및 고용부와 이용자 간의 분쟁에 대하여는 대한민국의 법령을 적용합니다.
            </p>
            <p className="text-xs">
              ② 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 민사소송법상의 관할법원에 제기합니다.
            </p>
          </div>

          <div className="p-3 rounded-md bg-primary/10">
            <p className="text-xs font-medium">부칙</p>
            <p className="text-xs">이 약관은 2025년 3월 19일부터 시행합니다.</p>
          </div>
        </div>
      </main>
    </>
  )
}

