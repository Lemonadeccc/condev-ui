import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Link
        href="https://github.com/Lemonadeccc/condev-ui"
        className="group block rounded-md border border-white/10 p-4 hover:border-white/20 hover:bg-white/5 transition"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-medium text-white">condev ui</div>
            <div className="mt-1 text-sm text-white/60">
              Components, patterns, and docs.
            </div>
          </div>
          <IconArrowRightLine className="mt-0.5 text-white/50 group-hover:text-white/80" size={18} />
        </div>
      </Link>

      <Link
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="group block rounded-md border border-white/10 p-4 hover:border-white/20 hover:bg-white/5 transition"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-medium text-white">Open GitHub</div>
            <div className="mt-1 text-sm text-white/60">
              A block-level link that looks like a card.
            </div>
          </div>
          <IconArrowRightLine className="mt-0.5 text-white/50 group-hover:text-white/80" size={18} />
        </div>
      </Link>
    </div>
  );
}
`;

export function CardLinkExample() {
  return <CodePreview code={code} />;
}

