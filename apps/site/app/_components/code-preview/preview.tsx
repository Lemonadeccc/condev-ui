import React from 'react';

import { cn } from '../_utils';

export function Preview({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('relative p-12  overflow-hidden min-w-25 border border-solid border-color rounded-md', className)}>{children}</div>
  );
}
