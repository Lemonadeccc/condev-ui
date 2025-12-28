import React from 'react';

import { CodePreview } from '@/app/_components/code-preview';

const code = `import React from 'react';
import { CdButton } from '@/app/_components/ui-lib';
import { IconCloseLine } from '@t-headless-ui/react';
import { cn } from '../../../../../_components/_utils';

const DrawerAlertDemo = ({
  title,
  showCloseIcon = false,
  onCancel,
  showFooter,
  onOk,
  className,
  style,
  contentClassName,
  loading,
  disabled,
  children,
}) => {
  return (
    <div
      className={cn(
        'grid gap-6 overflow-y-auto text-color bg-color p-6 border border-color w-[320px] h-[100vh] overflow-hidden content-between box-border',
        className,
      )}
      style={style}
    >
      <div className={cn('flex flex-col text-left gap-2')}>
        <div className="flex text-lg leading-7 font-semibold justify-between items-center">
          {title}
          {showCloseIcon && (
            <span
              className="cursor-pointer hover:bg-color-100 rounded-full p-0.5 active:text-color transition-all duration-500"
              onClick={onCancel}
            >
              <IconCloseLine />
            </span>
          )}
        </div>
        <div className={cn('text-sm leading-5 text-color-600 my-2 overflow-auto', contentClassName)}>{children}</div>
      </div>
      {showFooter && (
        <div className="flex justify-end gap-3">
          <CdButton type="outline" onClick={onCancel}>
            Cancel
          </CdButton>
          <CdButton status="primary" loading={loading} disabled={disabled} onClick={onOk}>
            Confirm
          </CdButton>
        </div>
      )}
    </div>
  );
};


function App() {
  return (
    <DrawerAlertDemo isAbsolute title="Drawer Alert" showCloseIcon showFooter>
        // cspell:disable-next-line
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </DrawerAlertDemo>
    )
}`;

export function DrawerAlertTailwindBasicExample() {
  return <CodePreview code={code} />;
}
