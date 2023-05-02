
const createTemplate = require('./templates/createTemplate')

const layerName = process.argv[2]
const sliceName = process.argv[3]

const availableLayers = ['features', 'entities', 'pages']

if (!availableLayers || !availableLayers.includes(layerName)) {
    throw new Error(`Укажите слой из перечисленных: ${availableLayers.join(', ')} `)
}

if (!sliceName) {
    throw new Error('Введите название слайса')
}

createTemplate(layerName, sliceName).then(r => `В слое ${layerName} успешно создан слайс ${sliceName}`)
