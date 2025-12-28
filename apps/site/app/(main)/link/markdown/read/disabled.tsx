import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="space-y-3">
      <div className="text-sm text-white/70">Clicked: {count}</div>

      <div className="space-x-4">
        <Link
          href="#"
          className="text-blue-400 hover:text-blue-300 underline"
          onClick={(e) => {
            e.preventDefault();
            setCount((c) => c + 1);
          }}
        >
          Enabled Link
        </Link>

        <Link
          href="#"
          disabled
          className="text-white/40 underline cursor-not-allowed"
          onClick={() => setCount((c) => c + 1)}
        >
          Disabled Link
        </Link>
      </div>
    </div>
  );
}
`;

export function DisabledExample() {
  return <CodePreview code={code} />;
}

