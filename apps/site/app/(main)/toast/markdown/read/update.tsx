import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex gap-x-2">
      <CdButton
        status="primary"
        onClick={() => {
          const id = CdMessage.loading({
            duration: null,
            message: '这是一条 info message',
          });
          
          setTimeout(() => {
            CdMessage.update(id, {
              type: 'success',
              duration: 4,
              message: '请求成功',
            });
          }, 3000);
        }}
      >
        Update Info
      </CdButton>
    </div>
  );
}`;

export function UpdateMessageExample() {
  return <CodePreview code={code} />;
}
