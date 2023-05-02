const fs = require('fs/promises')
const resolveRoot = require('../../utils/resolveRoot')
const publicApiTemplate = require('./publicApiTemplate')

module.exports = async (layerName, sliceName) => {
    const resolvePublicApi = (...segments) => resolveRoot('src', layerName, sliceName, ...segments)

    try {
        await fs.writeFile(
            resolvePublicApi('index.ts'),
            publicApiTemplate(sliceName)
        )
    } catch (e) {
        throw new Error('Не удалось создать public api для слайса ' + sliceName)
    }
}
