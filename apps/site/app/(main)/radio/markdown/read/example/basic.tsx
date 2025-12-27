import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  return (
    <div className="flex flex-wrap gap-4 flex-col">
     <div className="text-sm">Not Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <CdRadio>Default</CdRadio>
       <CdRadio disabled>Disabled</CdRadio>
       <CdRadio readonly>Readonly</CdRadio>
     </div>
     <div className="text-sm">Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <CdRadio checked>Default</CdRadio>
       <CdRadio disabled checked>Disabled</CdRadio>
       <CdRadio readonly checked>Readonly</CdRadio>
     </div>
    </div>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
