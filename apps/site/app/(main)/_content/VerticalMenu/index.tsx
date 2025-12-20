"use client"

import React from 'react'

import { VerticalMenu } from '@condev-ui/ui'

export default function VerticalMenuPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">VerticalMenu</h1>
      <p className="text-white/80">A vertical navigation menu.</p>
      
      <div className="p-8 border border-white/10 rounded-lg flex items-start justify-center bg-white/5 h-96">
        <div className="w-64 border border-white/20 rounded">
            <VerticalMenu.Root>
                <VerticalMenu.MenuItem value="item1" className="p-2 hover:bg-white/10 cursor-pointer">
                    Item 1
                </VerticalMenu.MenuItem>
                <VerticalMenu.Submenu value="sub1">
                    <VerticalMenu.SubMenuContent className="p-2 hover:bg-white/10 cursor-pointer">
                        Submenu 1
                    </VerticalMenu.SubMenuContent>
                    <VerticalMenu.SubMenuList className="pl-4">
                        <VerticalMenu.MenuItem value="subitem1" className="p-2 hover:bg-white/10 cursor-pointer">
                            Sub Item 1
                        </VerticalMenu.MenuItem>
                        <VerticalMenu.MenuItem value="subitem2" className="p-2 hover:bg-white/10 cursor-pointer">
                            Sub Item 2
                        </VerticalMenu.MenuItem>
                    </VerticalMenu.SubMenuList>
                </VerticalMenu.Submenu>
            </VerticalMenu.Root>
        </div>
      </div>
    </div>
  )
}
