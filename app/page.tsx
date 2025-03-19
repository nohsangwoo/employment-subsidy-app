import { MobileHeader } from "@/components/mobile-header"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const guides = [
    {
      title: "고용채움 안내",
      description: "고용채움 서비스의 개요 및 이용 방법에 대한 안내입니다.",
      link: "/guides/employment-filling",
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      title: "고용장려금 안내",
      description: "다양한 고용장려금 제도 및 지원 내용에 대한 안내입니다.",
      link: "/guides/employment-incentive",
      color: "bg-green-500/10",
      textColor: "text-green-500",
    },
    {
      title: "고용제도 안내",
      description: "고용 관련 제도 및 정책에 대한 종합적인 안내입니다.",
      link: "/guides/employment-system",
      color: "bg-purple-500/10",
      textColor: "text-purple-500",
    },
    {
      title: "4대보험환급 안내",
      description: "4대 사회보험 환급 절차 및 자격 요건에 대한 안내입니다.",
      link: "/guides/insurance-refund",
      color: "bg-orange-500/10",
      textColor: "text-orange-500",
    },
    {
      title: "신청절차 안내",
      description: "고용 보조금 및 지원금 신청 절차에 대한 상세 안내입니다.",
      link: "/guides/application-procedure",
      color: "bg-red-500/10",
      textColor: "text-red-500",
    },
  ]

  return (
    <>
      <MobileHeader title="고용 보조금" />
      <main className="p-4">
        <section className="space-y-4 mb-6">
          <h1 className="text-2xl font-bold tracking-tight">고용 보조금 안내</h1>
          <p className="text-muted-foreground">고용 보조금 및 지원 제도에 대한 종합 안내 서비스입니다.</p>
        </section>

        <div className="space-y-4">
          {guides.map((guide, index) => (
            <Link
              href={guide.link}
              key={index}
              className="block rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div
                    className={`inline-flex items-center justify-center rounded-full ${guide.color} ${guide.textColor} h-8 w-8 text-sm`}
                  >
                    {index + 1}
                  </div>
                  <h2 className="text-lg font-semibold">{guide.title}</h2>
                  <p className="text-xs text-muted-foreground">{guide.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-6 rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold">보조금 자격 조회</h2>
          <p className="mb-3 text-xs text-muted-foreground">
            고용 보조금 자격 및 상태를 조회하려면 아래 버튼을 클릭하세요. 개인 정보 인증이 필요합니다.
          </p>
          <Link href="/inquiry" className="block w-full">
            <button className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
              보조금 자격 조회하기
            </button>
          </Link>
        </section>
      </main>
    </>
  )
}

