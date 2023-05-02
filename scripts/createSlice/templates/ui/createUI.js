/* eslint-disable */

const resolveRoot = require('../../utils/resolveRoot')
const componentTemplate = require('./templates/componentTemplate')
const stylesTemplate = require('./templates/stylesTemplate')
const storiesTemplate = require('./templates/storiesTemplate')
const fs = require('fs/promises')

module.exports = async (layerName, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layerName, sliceName, 'ui', ...segments)

    try {
        await fs.mkdir(resolveUIPath(sliceName), { recursive: true })
    } catch (e) {
        throw new Error('Не удалось создать сегмент UI в слайсе ' + sliceName, e)
    }

    const createComponent = async () => {
        try {
            await fs.writeFile(
                resolveUIPath(sliceName, `${sliceName}.tsx`),
                componentTemplate(sliceName)
            )
        } catch (e) {
            throw new Error('Не удалось создать компонент в слайсе ' + sliceName, e)
        }
    }

    const createStyles = async () => {
        try {
            await fs.writeFile(
                resolveUIPath(sliceName, `${sliceName}.module.scss`),
                stylesTemplate(sliceName)
            )
        } catch (e) {
            throw new Error('Не удалось создать файл стилей в слайсе ' + sliceName, e)
        }
    }

    const createStories = async () => {
        try {
            await fs.writeFile(
                resolveUIPath(sliceName, `${sliceName}.stories.tsx`),
                storiesTemplate(layerName, sliceName)
            )
        } catch (e) {
            throw new Error('Не удалось создать файл сторисов в слайсе ' + sliceName, e)
        }
    }

    await createComponent()
    await createStyles()
    await createStories()
}
