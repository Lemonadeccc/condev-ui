import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[300px_1fr] min-h-screen pt-[72px]">
      <aside className="border-r border-white/10">

      </aside>
      <main className='w-full min-h-[calc(100vh-72px)] flex flex-col justify-center items-center text-white'>
        {children}
      </main>
    </div>
  )
}
