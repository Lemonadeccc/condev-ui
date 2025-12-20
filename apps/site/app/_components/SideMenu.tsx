"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { useMemo } from 'react'

import { VerticalMenu } from '@condev-ui/ui'

const componentsList = [
  "Button",
  "Checkbox",
  "Grid",
  "Link",
  "Modal",
  "Radio",
  "Toast",
  "VerticalMenu"
];

export const SideMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const selectedValuePath = useMemo(() => {
    if (pathname === '/docs') return ['docs'];

    const slug = pathname.replace(/^\//, '').toLowerCase();
    if (slug && componentsList.map(c => c.toLowerCase()).includes(slug)) {
      return ['components', slug];
    }
    return [];
  }, [pathname]);

  // Calculate default open state based on current path
  const defaultOpened = useMemo(() => {
    if (pathname === '/docs') return [];
    return ['components'];
  }, []);

  return (
    <VerticalMenu.Root
      selectedValuePath={selectedValuePath}
      defaultOpenedSubMenuValues={defaultOpened}
      className="w-full text-white py-4"
    >
      <VerticalMenu.MenuItem
        value="docs"
        onClick={() => router.push('/docs')}
        className="cursor-pointer px-6 py-3 hover:bg-white/10 text-sm tracking-widest uppercase transition-colors"
        selectedClassName="bg-white/10 text-white font-semibold"
        notSelectedClassName="text-white/60"
      >
        Docs
      </VerticalMenu.MenuItem>

      <VerticalMenu.Submenu value="components">
        <VerticalMenu.SubMenuContent
          className="px-6 py-3 cursor-pointer hover:bg-white/10 flex justify-between items-center text-sm tracking-widest uppercase transition-colors"
          selectedClassName="text-white font-semibold"
          notSelectedClassName="text-white/60"
        >
          Components
        </VerticalMenu.SubMenuContent>
        <VerticalMenu.SubMenuList className="bg-white/5">
          {componentsList.map(item => (
            <VerticalMenu.MenuItem
              key={item}
              value={item.toLowerCase()}
              onClick={() => router.push(`/${item.toLowerCase()}`)}
              className="pl-10 pr-6 py-2 cursor-pointer hover:bg-white/10 text-sm transition-colors"
              selectedClassName="text-white bg-white/10 border-r-2 border-white"
              notSelectedClassName="text-white/60"
            >
              {item}
            </VerticalMenu.MenuItem>
          ))}
        </VerticalMenu.SubMenuList>
      </VerticalMenu.Submenu>
    </VerticalMenu.Root>
  )
}
