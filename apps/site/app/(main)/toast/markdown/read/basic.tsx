import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  return (
    <CdButton
        status="primary"
        onClick={() =>
          CdMessage.info({
            message: "这是一条通知",
          })
        }
      >
        Open Info Message
    </CdButton>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
