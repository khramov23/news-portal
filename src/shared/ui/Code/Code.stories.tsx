import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Code } from './Code'

export default {
    title: 'shared/Code',
    args: {
        text: 'import { type ComponentMeta, type ComponentStory } from \'@storybook/react\'\n' +
            '\n' +
            'import { Code } from \'./Code\'\n' +
            '\n' +
            'export default {\n' +
            '    title: \'shared/Code\',\n' +
            '    component: Code\n' +
            '} as ComponentMeta<typeof Code>\n' +
            '\n' +
            'const Template: ComponentStory<typeof Code> = (args) => <Code />'
    },
    component: Code
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({})
