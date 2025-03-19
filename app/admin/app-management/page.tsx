"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "@/components/admin/data-table"
import { Edit, Trash, Plus, Save, X } from "lucide-react"

export default function AppManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">앱 관리</h1>
        <p className="text-muted-foreground">고용 보조금 앱의 콘텐츠와 설정을 관리하세요.</p>
      </div>

      <Tabs defaultValue="content">
        <TabsList className="mb-4">
          <TabsTrigger value="content">콘텐츠 관리</TabsTrigger>
          <TabsTrigger value="settings">앱 설정</TabsTrigger>
          <TabsTrigger value="versions">버전 관리</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <ContentManagement />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <AppSettings />
        </TabsContent>

        <TabsContent value="versions" className="space-y-4">
          <VersionManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ContentManagement() {
  const contentItems = [
    {
      id: 1,
      title: "고용채움 안내",
      type: "가이드",
      lastUpdated: "2025-03-15",
      status: "게시중",
    },
    {
      id: 2,
      title: "고용장려금 안내",
      type: "가이드",
      lastUpdated: "2025-03-10",
      status: "게시중",
    },
    {
      id: 3,
      title: "고용제도 안내",
      type: "가이드",
      lastUpdated: "2025-03-05",
      status: "게시중",
    },
    {
      id: 4,
      title: "4대보험환급 안내",
      type: "가이드",
      lastUpdated: "2025-02-28",
      status: "게시중",
    },
    {
      id: 5,
      title: "신청절차 안내",
      type: "가이드",
      lastUpdated: "2025-02-20",
      status: "게시중",
    },
  ]

  const contentColumns = [
    { header: "ID", accessor: "id" },
    { header: "제목", accessor: "title" },
    { header: "유형", accessor: "type" },
    { header: "최종 수정일", accessor: "lastUpdated" },
    {
      header: "상태",
      accessor: "status",
      cell: (value: string) => (
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
            value === "게시중"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      header: "작업",
      accessor: "id",
      cell: (value: number) => (
        <div className="flex space-x-2">
          <button className="rounded-md p-1 text-blue-600 hover:bg-blue-100">
            <Edit className="h-4 w-4" />
          </button>
          <button className="rounded-md p-1 text-red-600 hover:bg-red-100">
            <Trash className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium">콘텐츠 목록</h2>
        <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          콘텐츠 추가
        </button>
      </div>
      <DataTable columns={contentColumns} data={contentItems} />
    </div>
  )
}

function AppSettings() {
  const settings = [
    {
      id: "app_name",
      name: "앱 이름",
      value: "고용 보조금",
      type: "text",
    },
    {
      id: "app_description",
      name: "앱 설명",
      value: "고용 보조금 및 지원 제도에 대한 종합 안내 서비스",
      type: "textarea",
    },
    {
      id: "primary_color",
      name: "주 색상",
      value: "#3B82F6",
      type: "color",
    },
    {
      id: "enable_dark_mode",
      name: "다크 모드 활성화",
      value: true,
      type: "toggle",
    },
    {
      id: "maintenance_mode",
      name: "유지보수 모드",
      value: false,
      type: "toggle",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">앱 설정</h2>
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-4">
          <form className="space-y-4">
            {settings.map((setting) => (
              <div key={setting.id} className="grid grid-cols-3 items-center gap-4">
                <label htmlFor={setting.id} className="text-sm font-medium">
                  {setting.name}
                </label>
                {setting.type === "text" && (
                  <input
                    id={setting.id}
                    type="text"
                    defaultValue={setting.value as string}
                    className="col-span-2 rounded-md border px-3 py-2"
                  />
                )}
                {setting.type === "textarea" && (
                  <textarea
                    id={setting.id}
                    defaultValue={setting.value as string}
                    rows={3}
                    className="col-span-2 rounded-md border px-3 py-2"
                  />
                )}
                {setting.type === "color" && (
                  <div className="col-span-2 flex items-center gap-2">
                    <input
                      id={setting.id}
                      type="color"
                      defaultValue={setting.value as string}
                      className="h-8 w-8 rounded-md border"
                    />
                    <input type="text" defaultValue={setting.value as string} className="rounded-md border px-3 py-2" />
                  </div>
                )}
                {setting.type === "toggle" && (
                  <div className="col-span-2">
                    <button
                      type="button"
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        setting.value ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          setting.value ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-end space-x-2 pt-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium"
              >
                <X className="mr-2 h-4 w-4" />
                취소
              </button>
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
              >
                <Save className="mr-2 h-4 w-4" />
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function VersionManagement() {
  const versions = [
    {
      version: "1.0.0",
      releaseDate: "2025-03-19",
      status: "현재 버전",
      notes: "초기 출시 버전",
    },
    {
      version: "0.9.0",
      releaseDate: "2025-03-01",
      status: "이전 버전",
      notes: "베타 테스트 버전",
    },
    {
      version: "0.8.0",
      releaseDate: "2025-02-15",
      status: "이전 버전",
      notes: "알파 테스트 버전",
    },
  ]

  const versionColumns = [
    { header: "버전", accessor: "version" },
    { header: "출시일", accessor: "releaseDate" },
    {
      header: "상태",
      accessor: "status",
      cell: (value: string) => (
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
            value === "현재 버전"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          {value}
        </span>
      ),
    },
    { header: "릴리스 노트", accessor: "notes" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium">버전 관리</h2>
        <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />새 버전 등록
        </button>
      </div>
      <DataTable columns={versionColumns} data={versions} />
    </div>
  )
}

