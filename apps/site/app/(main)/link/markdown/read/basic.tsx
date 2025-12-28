import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="space-x-4">
      <Link href="https://ui.condevtools.com/" className="text-blue-400 hover:text-blue-300 underline">
        condev ui
      </Link>
    </div>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}

