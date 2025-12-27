import React from 'react'

import { Catalog } from '@/app/_components/catalog'

import { ButtonMarkdown,catalogList } from './markdown/read'

export default function Page() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex">
        <div className="grow shrink basis-0 overflow-hidden px-8 mt-8 mb-12">
          <ButtonMarkdown />
        </div>
        <Catalog items={catalogList} />
      </div>
    </div>
  )
}

