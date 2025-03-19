import { MobileHeader } from "@/components/mobile-header"
import Link from "next/link"
import { BookOpen, CreditCard, Briefcase, Shield, FileCheck, ChevronRight } from "lucide-react"

export default function GuidesPage() {
  const guides = [
    {
      title: "고용채움 안내",
      description: "고용채움 서비스의 개요 및 이용 방법",
      link: "/guides/employment-filling",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "고용장려금 안내",
      description: "다양한 고용장려금 제도 및 지원 내용",
      link: "/guides/employment-incentive",
      icon: CreditCard,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "고용제도 안내",
      description: "고용 관련 제도 및 정책에 대한 종합 안내",
      link: "/guides/employment-system",
      icon: Briefcase,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "4대보험환급 안내",
      description: "4대 사회보험 환급 절차 및 자격 요건",
      link: "/guides/insurance-refund",
      icon: Shield,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "신청절차 안내",
      description: "고용 보조금 및 지원금 신청 절차",
      link: "/guides/application-procedure",
      icon: FileCheck,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <>
      <MobileHeader title="안내 가이드" />
      <main className="p-4">
        <div className="space-y-4">
          {guides.map((guide, index) => (
            <Link
              href={guide.link}
              key={index}
              className="flex items-center justify-between p-4 rounded-lg border bg-card shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${guide.bgColor}`}>
                  <guide.icon className={`w-5 h-5 ${guide.color}`} />
                </div>
                <div>
                  <h2 className="font-medium">{guide.title}</h2>
                  <p className="text-xs text-muted-foreground">{guide.description}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

