import DashboardNav from "@components/navs/DashboardNav"

export default function DashBoardLayout({children}) {
  return (
    <>
      <DashboardNav/>
      <main className="w-full">
        {children}
      </main>
    </>
  )
}
