'use client'

import React from 'react';

import { cn } from '@/app/_components/_utils';
import { CdModalBox } from '@/app/_components/ui-lib'
import { modalStore } from '@/app/modal-store'

export const CdModal = {
  add({
    title,
    showCloseIcon = true,
    onCancel,
    showFooter = true,
    onOk,
    className,
    style,
    contentClassName,
    containerClassName,
    maskClassName,
    content,
    initialFocusEl,
    attach,
  }: {
    title: string;
    showCloseIcon?: boolean;
    onCancel?: () => void;
    showFooter?: boolean;
    onOk?: () => void;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    containerClassName?: string;
    maskClassName?: string;
    content: React.ReactNode;
    initialFocusEl?: () => void;
    attach?: string;
  }) {
    const id = modalStore.add({
      attach,
      initialFocusEl,
      maskCls: cn('z-modal fixed inset-0 bg-black/50 w-full h-full overflow-hidden', maskClassName),
      containerClassName: cn('z-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden', containerClassName),
      content: (
        <CdModalBox
          title={title}
          showCloseIcon={showCloseIcon}
          showFooter={showFooter}
          className={className}
          contentClassName={contentClassName}
          style={style}
          onCancel={() => {
            onCancel?.();
            modalStore.remove(id);
          }}
          onOk={() => {
            onOk?.();
          }}
        >
          {content}
        </CdModalBox>
      ),
      onCancel: () => {
        modalStore.remove(id);
      },
    });
    return id;
  },

  update(id: string, data: any) {
    modalStore.update(id, { contentProps: data });
  },
  remove(id: string) {
    modalStore.remove(id);
  },
};
