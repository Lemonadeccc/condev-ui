import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 flex-col">
      <CdButton
        onClick={() => {
          setChecked(!checked);
        }}
        status="primary"
        type="outline"
        className="w-fit"
      >
        {checked ? 'Uncheck' : 'Check'}
      </CdButton>
      <CdRadio checked={checked}>Default</CdRadio>
      <CdRadio disabled checked={checked}>
        Disabled
      </CdRadio>
      <CdRadio readonly checked={checked}>
        Readonly
      </CdRadio>
    </div>
  );
}`;

export function CheckedExample() {
  return <CodePreview code={code} />;
}
