import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  let index = 1;
  return (
    <CdButton
        status="primary"
        onClick={() =>
          toastBottomStore.add({
            duration: 3,
            component: <CdAlert message={\`这是第\${index++}条通知\`} title="Alter" containerClassName="pb-2" />,
          })
        }
      >
        custom position
    </CdButton>
  );
}
`;

export function PositionExample() {
  return <CodePreview code={code} />;
}
