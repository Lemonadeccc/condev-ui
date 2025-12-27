import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `import { useState } from 'React';

function App() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  function onClickBtn1(e) {
      setLoading1(true);
      setTimeout(() => {
        setLoading1(false);
      }, 4000);
    }

    function onClickBtn2(e) {
      setLoading2(true);
      setTimeout(() => {
        setLoading2(false);
      }, 4000);
    }

  return (
    <div className="flex flex-wrap gap-4 max-w-[360px]">
      <CdButton loading disabled status="primary">Primary</CdButton>
      <CdButton loading status="warning">Warning</CdButton>
      <CdButton loading={loading1} onClick={onClickBtn1}>Default</CdButton>
      <CdButton loading disabled status="primary" type="outline">Primary</CdButton>
      <CdButton loading status="warning" type="outline">Warning</CdButton>
      <CdButton loading={loading2} onClick={onClickBtn2} type="outline">Default</CdButton>
    </div>
  );
}
`;

export function LoadingExample() {
  return <CodePreview code={code} />;
}
