import Link from 'next/link'
import React from 'react'

const components = ['button', 'checkbox', 'grid', 'link', 'modal', 'radio', 'toast', 'verticalmenu'] as const

export default function DocsPage() {
  return (
    <div className="w-full max-w-3xl px-8 py-12">
      <h1 className="text-4xl font-bold">Docs</h1>
      <p className="mt-4 text-white/80">
        condev-ui is a headless component library for React. Use the left menu to browse components, or jump to one below.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">Components</h2>
      <ul className="mt-4 grid grid-cols-2 gap-3">
        {components.map((slug) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              className="block rounded-md border border-white/10 px-4 py-3 hover:bg-white/5 transition-colors"
            >
              <span className="capitalize">{slug}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">Getting Started</h2>
      <div className="mt-4 rounded-md border border-white/10 bg-white/5 p-4 text-sm text-white/80">
        <div>Install deps and start dev server:</div>
        <div className="mt-2 font-mono text-white">
          pnpm dev:site
        </div>
      </div>
    </div>
  )
}

