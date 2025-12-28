import React, { type PropsWithChildren } from 'react';

import { IconCloseLine } from '@condev-ui/ui';

import { cn } from '@/app/_components/_utils';
import { CdButton } from '@/app/_components/ui-lib';

export interface ModalProps {
  title: string;
  showCloseIcon?: boolean;
  onCancel?: () => void;
  showFooter?: boolean;
  onOk?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
}

export const CdModalBox: React.FC<PropsWithChildren<ModalProps>> = ({
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
        'grid gap-6 overflow-y-auto text-color bg-color p-6 rounded-2xl border border-color shadow-lg md:w-[400px] w-[320px] overflow-hidden content-between',
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
        <div className={cn('text-sm leading-5 text-color-400', contentClassName)}>{children}</div>
      </div>
      {showFooter && (
        <div className="flex justify-end gap-3">
          <CdButton type="outline" onClick={onCancel}>
            取消
          </CdButton>
          <CdButton status="primary" loading={loading} disabled={disabled} onClick={onOk}>
            确定
          </CdButton>
        </div>
      )}
    </div>
  );
};
