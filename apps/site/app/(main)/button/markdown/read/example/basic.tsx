import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <CdButton status="primary">Brand</CdButton>
      <CdButton status="primary" type="outline">Outline</CdButton>
    </div>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
