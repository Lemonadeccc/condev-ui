import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <CdButton
      status="primary"
      onClick={() => {
        CdModal.add({
          title: 'Modal Alert',
          content: 'This is a message!',
          containerClassName: 'absolute',
          maskClassName: 'absolute',
          attach: '#attach-example',
        });
      }}
    >
      Open Modal
    </CdButton>
  );
}`;

export function AttachExample() {
  return <CodePreview code={code} id="attach-example" demoContainerStyle={{ height: 400 }} />;
}
