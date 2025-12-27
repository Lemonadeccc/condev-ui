import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `import { useState } from 'React';

function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[360px]">
      <CdButton status="primary" small>Small</CdButton>
      <CdButton status="primary">Default</CdButton>
      <CdButton status="primary" large>Large</CdButton>
    </div>
  );
}
`;

export function SizeExample() {
  return <CodePreview code={code} />;
}
