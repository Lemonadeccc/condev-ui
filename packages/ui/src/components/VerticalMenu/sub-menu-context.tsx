'use client';

import { createContext } from 'react';

import { SubMenuContextProps } from './types-context';

export const SubMenuContext = createContext<Partial<SubMenuContextProps>>({});
