const firstLetterToLowerCase = require('../../../utils/firstLetterToLowerCase')

const interfaceString = 'interface'

module.exports = (fileName) => `
import { memo } from 'react'

import styles from './${fileName}.module.scss'
import { cls } from 'shared/lib/classNames'

${interfaceString} ${fileName}Props {
    className?: string
}

export const ${fileName} = memo((props: ${fileName}Props) => {
    const { className } = props

    return (
        <div className={cls(styles.${firstLetterToLowerCase(fileName)}, className)}>

        </div>
    )
})
`
