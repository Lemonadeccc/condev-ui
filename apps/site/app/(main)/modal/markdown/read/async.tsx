import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <CdButton
      status="primary"
      onClick={() => {
        const id = CdModal.add({
          title: 'Modal Alert',
          // cspell:disable-next-line
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // className 定义 modal 最外层 div 的样式
          className: 'h-[300px]',
          onOk: (update) => {
            CdModal.update(id,  { loading: true, disabled: true });
            setTimeout(() => {
              CdModal.remove(id);
              // CdModal.update(id,  { loading: false, disabled: false });
            }, 2000);
          },
        });
      }}
    >
      Open Async Modal
    </CdButton>
  );
}`;

export function AsyncExample() {
  return <CodePreview code={code} />;
}
