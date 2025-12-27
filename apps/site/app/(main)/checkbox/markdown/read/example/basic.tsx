import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <div className="flex flex-wrap gap-4 flex-col">
     <div className="text-sm">Not Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <CdCheckbox>Default</CdCheckbox>
       <CdCheckbox disabled>Disabled</CdCheckbox>
       <CdCheckbox readonly>Readonly</CdCheckbox>
     </div>
     <div className="text-sm">Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <CdCheckbox checked>Default</CdCheckbox>
       <CdCheckbox disabled checked>Disabled</CdCheckbox>
       <CdCheckbox readonly checked>Readonly</CdCheckbox>
     </div>
    </div>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
