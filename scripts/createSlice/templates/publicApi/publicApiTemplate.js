const firstLetterToLowerCase = require('../../utils/firstLetterToLowerCase')

module.exports = (sliceName) => {
    const lowerSliceName = firstLetterToLowerCase(sliceName)

    return `
export type { ${sliceName}Schema } from './model/types/${lowerSliceName}Schema'
export { ${lowerSliceName}Actions, ${lowerSliceName}Reducer } from './model/slice/${lowerSliceName}Slice'
export { ${sliceName} } from './ui/${sliceName}/${sliceName}'

`
}
