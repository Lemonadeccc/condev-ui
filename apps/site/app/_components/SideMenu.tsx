"use client"

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { Menu, MenuItem, SubMenu } from './menu/page-menu'

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
  const isDocs = pathname === '/docs'

  return (
    <div className="w-full text-white py-4">
      <Menu
        data={[
          {
            value: '/docs',
            content: <MenuItem className="text-sm font-light">Docs</MenuItem>,
            onClick: () => router.push('/docs'),
          },
          {
            value: 'components',
            defaultCollapsed: isDocs,
            content: (
              <SubMenu>
                <MenuItem className="text-sm font-light">Components</MenuItem>
              </SubMenu>
            ),
            onClick: () => router.push('/components'),
            items: componentsList.map((label) => ({
              value: `/${label.toLowerCase()}`,
              content: <MenuItem className="text-sm font-light">{label}</MenuItem>,
              onClick: () => router.push(`/${label.toLowerCase()}`),
            })),
          },
        ]}
      />
    </div>
  )
}
