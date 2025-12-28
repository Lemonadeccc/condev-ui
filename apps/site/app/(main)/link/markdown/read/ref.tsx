import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `
function App() {
  const [activeTag, setActiveTag] = React.useState('none');
  const [activeText, setActiveText] = React.useState('');

  const linkRef = React.useRef(null);

  React.useEffect(() => {
    const update = () => {
      const el = document.activeElement;
      const tag = el?.tagName ? el.tagName.toLowerCase() : 'none';
      const text = (el && 'textContent' in el ? (el.textContent || '') : '').trim();
      setActiveTag(tag);
      setActiveText(text ? text.slice(0, 24) : '');
    };

    update();
    window.addEventListener('focusin', update);
    window.addEventListener('focusout', update);
    return () => {
      window.removeEventListener('focusin', update);
      window.removeEventListener('focusout', update);
    };
  }, []);

  const isLinkFocused = activeTag === 'a';

  return (
    <div className="space-y-3">
      <div className="text-sm text-white/70">
        Active element: <span className="text-white">{activeTag}</span>
        {activeText ? <span className="ml-2 text-white/50">({activeText})</span> : null}
      </div>

      <div className="space-x-4">
        <Button onClick={() => linkRef.current?.focus()}>Focus Link</Button>
        <Button onClick={() => linkRef.current?.blur()}>Blur</Button>
      </div>

      <Link
        ref={linkRef}
        href="https://ui.condevtools.com/"
        className={\`inline-flex items-center text-blue-400 hover:text-blue-300 underline underline-offset-4 \${isLinkFocused ? 'ring-2 ring-blue-400 rounded-sm' : ''}\`}
      >
        Focusable Link
      </Link>
    </div>
  );
}
`;

export function RefExample() {
  return <CodePreview code={code} />;
}
