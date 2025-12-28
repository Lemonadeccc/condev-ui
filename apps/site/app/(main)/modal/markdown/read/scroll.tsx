import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <CdButton
        status="primary"
        onClick={() => {
          CdModal.add({
            title: 'Modal Alert',
            content: Array.from({ length: 10 }).map((_, index) => logContent),
            // className 定义 modal 最外层 div 的样式
            contentClassName: 'max-h-[300px] overflow-auto',
          });
        }}
      >
        Open Modal
    </CdButton>
  );
}
// cspell:disable-next-line
const logContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';`;

export function ScrollExample() {
  return <CodePreview code={code} />;
}
