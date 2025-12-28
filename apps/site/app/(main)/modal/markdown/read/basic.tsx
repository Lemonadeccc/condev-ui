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
        });
      }}
    >
      Open Modal
    </CdButton>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
