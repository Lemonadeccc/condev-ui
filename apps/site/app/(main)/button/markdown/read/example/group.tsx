import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-white/20 [&>button:not(:last-child)]:border-r">
        <CdButton status="primary">Left</CdButton>
        <CdButton status="primary">Middle</CdButton>
        <CdButton status="primary">Right</CdButton>
      </div>
      <div className="flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-0">
        <CdButton status="primary" type="outline">
          Left
        </CdButton>
        <CdButton status="primary" type="outline">
          Middle
        </CdButton>
        <CdButton status="primary" type="outline">
          Right
        </CdButton>
      </div>
    </div>
  );
}
`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
