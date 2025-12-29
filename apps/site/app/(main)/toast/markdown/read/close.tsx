import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex gap-x-2">
      <CdButton
        status="primary"
        onClick={() => {
          CdMessage.info({
            duration: null,
            showClose: true,
            message: '这是一条 info message',
          });
        }}
      >
        Close Effect
      </CdButton>
    </div>
  );
}`;

export function CloseExample() {
  return <CodePreview code={code} />;
}
