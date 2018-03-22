import React from 'react'

const evalCode = (code, scope) => {
  const scopeKeys = Object.keys(scope)
  const scopeValues = scopeKeys.map(key => scope[key])
  const res = new Function('React', ...scopeKeys, code)
  return res(React, ...scopeValues)
}

export default evalCode
