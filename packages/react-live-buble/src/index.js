import { transform as _transform } from 'buble'
import assign from 'core-js/fn/object/assign'

export const _poly = { assign }

const opts = {
  objectAssign: '_poly.assign',
  transforms: {
    dangerousForOf: true,
    dangerousTaggedTemplateString: true
  }
}

export default code => {
  // NOTE: Remove trailing semicolon to get an actual expression.
  const codeTrimmed = code.trim().replace(/;$/, '')
  if (codeTrimmed) {
    // NOTE: Workaround for classes and arrow functions.
    return _transform(`(${codeTrimmed})`, opts).code.trim()
  }
  return '';
}
