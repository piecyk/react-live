import errorBoundary from './errorBoundary'
import evalCode from './evalCode'

export const generateElement = (
  { code = '', scope = {} },
  errorCallback
) => {
  return errorBoundary(
    evalCode(
      `return ${code}`,
      scope
    ),
    errorCallback
  )
}

export const renderElementAsync = (
  { code = '', scope = {} },
  resultCallback,
  errorCallback
) => {
  const render = element => {
    resultCallback(
      errorBoundary(
        element,
        errorCallback
      )
    )
  }

  if (!/render\s*\(/.test(code)) {
    return errorCallback(
      new SyntaxError('No-Inline evaluations must call `render`.')
    )
  }

  evalCode(
    code,
    { ...scope, render }
  )
}
