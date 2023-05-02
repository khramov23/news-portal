const fs = require('fs/promises')
const resolveRoot = require('../utils/resolveRoot')
const createUI = require('./ui/createUI')
const createModel = require('./model/createModel')
const createPublicApi = require('./publicApi/createPublicApi')

module.exports = async (layerName, sliceName) => {
    try {
        await fs.mkdir(resolveRoot('src', layerName, sliceName))
    } catch (e) {
        throw new Error(`Не удалось создать слайс ${sliceName} в слое ${layerName}`, e)
    }

    await createUI(layerName, sliceName)
    await createModel(layerName, sliceName)
    await createPublicApi(layerName, sliceName)
}
