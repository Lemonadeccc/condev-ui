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
      <CdCheckbox checked={checked}>Default</CdCheckbox>
      <CdCheckbox disabled checked={checked}>
        Disabled
      </CdCheckbox>
      <CdCheckbox readonly checked={checked}>
        Readonly
      </CdCheckbox>
    </div>
  );
}`;

export function CheckedExample() {
  return <CodePreview code={code} />;
}
