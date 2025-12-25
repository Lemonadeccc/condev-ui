import React from 'react'

import { javascript } from '@codemirror/lang-javascript'
import { materialDark } from '@uiw/codemirror-theme-material'
import CodeMirror from '@uiw/react-codemirror'

import './js-preview.css'

import type { JsPreviewProps } from './interface'

export function JsPreview({ code, onChange, readOnly = false }: JsPreviewProps) {
  return (
    <CodeMirror
      value={code.trim()}
      theme={materialDark}
      extensions={[javascript({ jsx: true })]}
      readOnly={readOnly}
      className="max-h-125 overflow-auto text-sm"
      onChange={onChange}
      basicSetup={{
        foldGutter: false,
        autocompletion: false,
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
        drawSelection: false
      }}
    />
  )
}