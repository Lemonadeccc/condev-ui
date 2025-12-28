import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `import React from 'react';
import { CdButton } from '@/app/_components/ui-lib';
import { IconCloseLine } from '@condev-ui/ui';
import { cn } from '../../../../../_components/_utils';

const CdModalDemo = ({
  title,
  showCloseIcon = false,
  onCancel,
  showFooter,
  onOk,
  loading,
  className,
  style,
  isAbsolute,
  containerClassName,
  children,
}) => {
  return (
    <div
      className={cn(
        'grid gap-6 overflow-y-auto text-color bg-color p-6 rounded-2xl border border-color shadow-lg max-w-[400px]',
        className,
      )}
      style={style}
    >
      <div className={cn('flex flex-col text-left gap-2', containerClassName)}>
        <div className="flex text-lg leading-7 font-semibold justify-between items-center">
          {title}
          {showCloseIcon && (
            <span className="cursor-pointer hover:bg-color-100 rounded-full p-1 active:text-color" onClick={onCancel}>
              <IconCloseLine />
            </span>
          )}
        </div>
        <div className="text-sm leading-5 text-color-400]">{children}</div>
      </div>
      {showFooter && (
        <div className="flex justify-end gap-3">
          <CdButton type="outline" onClick={onCancel}>
            Cancel
          </CdButton>
          <CdButton status="primary" loading={loading} onClick={onOk}>
            Confirm
          </CdButton>
        </div>
      )}
    </div>
  );
};


function App() {
  return (
    <CdModalDemo isAbsolute title="Modal Alert" showCloseIcon showFooter>
      This is a message!
    </CdModalDemo>
    )
}`;

export function ModalAlertTailwindBasicExample() {
  return <CodePreview code={code} />;
}
