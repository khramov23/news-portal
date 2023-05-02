
module.exports = (layerName, sliceName) => `
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ${sliceName} } from './${sliceName}'

export default {
    title: '${layerName}/${sliceName}',
    component: ${sliceName}
} as ComponentMeta<typeof ${sliceName}>

const Template: ComponentStory<typeof ${sliceName}> = (args) => <${sliceName} {...args} />

export const Primary = Template.bind({})
Primary.args = {}
`
