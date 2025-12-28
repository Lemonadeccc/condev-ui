import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://ui.condevtools.com/"
        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 underline underline-offset-4"
      >
        <span>Docs</span>
        <IconArrowRightLine size={16} />
      </Link>

      <Link
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 underline underline-offset-4"
      >
        <IconGithubFill size={16} />
        <span>GitHub</span>
      </Link>
    </div>
  );
}
`;

export function IconLinkExample() {
  return <CodePreview code={code} />;
}
