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
            duration: 4,
            message: '这是一条 info message',
          });
        }}
      >
        Info
      </CdButton>
      <CdButton
        status="warning"
        onClick={() => {
          CdMessage.warning({
            duration: 4,
            message: '这是一条 warning message',
          });
        }}
      >
        Warning
      </CdButton>
       <CdButton
        status="success"
        onClick={() => {
          CdMessage.success({
            duration: 4,
            message: '这是一条 success message',
          });
        }}
      >
        Success
      </CdButton>
      <CdButton
        status="error"
        onClick={() => {
          CdMessage.error({
            duration: 4,
            message: '这是一条 error message',
          });
        }}
      >
        Error
      </CdButton>
       <CdButton
        status="default"
        onClick={() => {
          CdMessage.loading({
            duration: 4,
            message: '这是一条 loading message',
          });
        }}
      >
        Loading
      </CdButton>
    </div>
  );
}
`;

export function StatusExample() {
  return <CodePreview code={code} />;
}
