'use client'

import React from 'react'

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { className, ...rest } = props
  return <a {...rest} className={className ?? 'text-blue-400 hover:text-blue-300 underline'} />
}

