import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <CdButton status="primary">Primary</CdButton>
      <CdButton status="warning">Warning</CdButton>
      <CdButton status="error">Error</CdButton>
      <CdButton status="success">Success</CdButton>
      <CdButton>Default</CdButton>
      <CdButton status="primary" type="outline">Primary</CdButton>
      <CdButton status="warning" type="outline">Warning</CdButton>
      <CdButton status="error" type="outline">Error</CdButton>
      <CdButton status="success" type="outline">Success</CdButton>
      <CdButton type="outline">Default</CdButton>
    </div>
  );
}
`;

export function StatusExample() {
  return <CodePreview code={code} />;
}
