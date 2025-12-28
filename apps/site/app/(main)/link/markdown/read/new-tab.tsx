import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <Link
      href="https://github.com"
      target="_blank"
      rel="noreferrer"
      className="text-blue-400 hover:text-blue-300 underline"
    >
      Open GitHub in a new tab
    </Link>
  );
}
`;

export function NewTabExample() {
  return <CodePreview code={code} />;
}

