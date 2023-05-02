/* eslint-disable */

const resolveRoot = require('../../utils/resolveRoot')
const reduxSliceTemplate = require('./templates/reduxSliceTemplate')
const typesTemplate = require('./templates/typesTemplate')
const firstLetterToLowerCase = require('../../utils/firstLetterToLowerCase')

const fs = require('fs/promises')


module.exports = async (layerName, sliceName) => {
    const resolveModelPath = (...segments) => resolveRoot('src', layerName, sliceName, 'model', ...segments)
    const lowerSliceName = firstLetterToLowerCase(sliceName)

    try {
        await fs.mkdir(resolveModelPath())
    } catch (e) {
        throw new Error('Не удалось создать сегмент Model в слайсе ' + sliceName, e)
    }

    try {
        await fs.mkdir(resolveModelPath('services'))
    } catch (e) {
        throw new Error('Не удалось создать папку services в модели слайса ' + sliceName, e)
    }

    try {
        await fs.mkdir(resolveModelPath('selectors'))
    } catch (e) {
        throw new Error('Не удалось создать папку selectors в модели слайса ' + sliceName, e)
    }

    const createReduxSlice = async () => {
        try {
            await fs.mkdir(resolveModelPath('slice'))
            await fs.writeFile(
                resolveModelPath('slice', `${lowerSliceName}Slice.ts`),
                reduxSliceTemplate(sliceName)
            )
        } catch (e) {
            throw new Error('Не удалось создать redux-slice в слайсе ' + sliceName, e)
        }
    }

    const createTypes = async () => {
        try {
            await fs.mkdir(resolveModelPath('types'))
            await fs.writeFile(
                resolveModelPath('types', `${lowerSliceName}Schema.ts`),
                typesTemplate(sliceName)
            )
        } catch (e) {
            throw new Error('Не удалось создать тип для redux-схемы в слайсе ' + sliceName, e)
        }
    }

    await createReduxSlice(sliceName)
    await createTypes(sliceName)
}
