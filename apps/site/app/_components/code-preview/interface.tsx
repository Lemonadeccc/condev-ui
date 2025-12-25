import { CSSProperties } from 'react'

export interface CodePreviewProps {
  code?: string;
  cssCode?: string;
  dependencies?: Record<string, any>
  demoContainerStyle?: CSSProperties;
  id?: string;
}