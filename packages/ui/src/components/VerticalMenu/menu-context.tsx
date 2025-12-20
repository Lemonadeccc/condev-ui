'use client';

import { createContext } from 'react';

import type { MenuContextProps } from './types-context';

export const MenuContext = createContext<Partial<MenuContextProps>>({});
