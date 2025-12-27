import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <Checkbox.Group defaultValue={['2']} className="flex gap-4 flex-wrap">
      <CdCheckbox value="1">Option 1</CdCheckbox>
      <CdCheckbox value="2">Option 2</CdCheckbox>
      <CdCheckbox value="3">Option 3</CdCheckbox>
    </Checkbox.Group>
  );
}`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
