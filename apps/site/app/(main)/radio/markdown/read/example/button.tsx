import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <Radio.Group defaultValue="Apple" className="inline-flex rounded-md p-1 bg-color-100">
      <CdButtonRadio value="Apple">Apple</CdButtonRadio>
      <CdButtonRadio value="Orange">Orange</CdButtonRadio>
      <CdButtonRadio value="Banana">Banana</CdButtonRadio>
      <CdButtonRadio value="Watermelon" disabled>
        Watermelon
      </CdButtonRadio>
    </Radio.Group>
  );
}
`;

export function ButtonExample() {
  return <CodePreview code={code} />;
}
