import { SideMenu } from '../_components/SideMenu'

export default function layout({
  children,
  catalog,
}: {
  children: React.ReactNode
  catalog: React.ReactNode
}) {
  return (
    <div className="bg-black grid min-h-screen pt-[72px] md:grid-cols-[250px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)_250px]">
      <aside className="border-r border-white/10 h-[calc(100vh-72px)] sticky top-[72px] overflow-y-auto hidden md:block">
        <SideMenu />
      </aside>

      <main className="w-full min-h-[calc(100vh-72px)] text-white min-w-0">
        <div className=" mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <aside className="hidden lg:block border-l border-white/10 h-[calc(100vh-72px)] sticky top-[72px] overflow-y-auto py-8 px-4">
        {catalog}
      </aside>
    </div>
  )
}
