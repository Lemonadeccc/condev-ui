import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <Radio.Group defaultValue="2" className="flex gap-4 flex-wrap">
      <CdRadio value="1">Option 1</CdRadio>
      <CdRadio value="2">Option 2</CdRadio>
      <CdRadio value="3">Option 3</CdRadio>
    </Radio.Group>
  );
}`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
