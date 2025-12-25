import { css } from '@codemirror/lang-css'
import { materialDark } from '@uiw/codemirror-theme-material'
import CodeMirror from '@uiw/react-codemirror'

import type { CssPreviewProps } from './interface'

export function CssPreview({ cssCode }: CssPreviewProps) {
  return (
    <CodeMirror
      value={cssCode.trim()}
      theme={materialDark}
      extensions={[css()]}
      className="max-h-125 overflow-auto text-sm"
      readOnly
      basicSetup={
        {
          foldGutter: false,
          autocompletion: false,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
          drawSelection: false
        }
      }
    />
  )
}