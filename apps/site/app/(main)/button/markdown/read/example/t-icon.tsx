import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <CdButton status="primary" onlyIcon><IconHomeLine /></CdButton>
      <CdButton status="primary">Go <IconArrowRightLine className="ml-2" /></CdButton>
    </div>
  );
}`;

export function TIconExample() {
  return <CodePreview code={code} />;
}
