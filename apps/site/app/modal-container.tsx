"use client";

import { ModalProvider } from '@condev-ui/ui';

import { modalStore } from './modal-store';

export default function ModalContainer() {
  return <ModalProvider store={modalStore} />;
}
