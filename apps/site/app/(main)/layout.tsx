import React from 'react'

import { SideMenu } from '../_components/SideMenu'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[200px_1fr] min-h-screen pt-[72px]">
      <aside className="border-r border-white/10 h-[calc(100vh-72px)] sticky top-[72px] overflow-y-auto">
        <SideMenu />
      </aside>
      <main className='w-full min-h-[calc(100vh-72px)] flex flex-col justify-center items-center text-white'>
        {children}
      </main>
    </div>
  )
}