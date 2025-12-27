import React, { Component, type ComponentType, type ReactElement } from 'react'

const errorBoundary = (
  Element: ComponentType | ReactElement | null | undefined,
  errorCallback: (error: Error) => void
) => {
  return class ErrorBoundary extends Component<unknown, { hasError: boolean }> {
    state = { hasError: false }

    componentDidCatch(err: Error) {
      this.setState({ hasError: true })
      errorCallback(err)
    }

    render() {
      if (this.state.hasError) return null
      return typeof Element === 'function' ? <Element /> : React.isValidElement(Element) ? Element : null
    }
  }
}

export default errorBoundary
