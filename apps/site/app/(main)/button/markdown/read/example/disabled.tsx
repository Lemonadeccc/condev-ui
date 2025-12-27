import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <CdButton disabled status="primary">Primary</CdButton>
      <CdButton disabled status="warning">Warning</CdButton>
      <CdButton disabled status="error">Error</CdButton>
      <CdButton disabled status="success">Success</CdButton>
      <CdButton disabled>Default</CdButton>
      <CdButton disabled status="primary" type="outline">Primary</CdButton>
      <CdButton disabled status="warning" type="outline">Warning</CdButton>
      <CdButton disabled status="error" type="outline">Error</CdButton>
      <CdButton disabled status="success" type="outline">Success</CdButton>
      <CdButton disabled type="outline">Default</CdButton>
    </div>
  );
}
`;

export function DisabledExample() {
  return <CodePreview code={code} />;
}
