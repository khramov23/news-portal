import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Flex } from './Flex'

export default {
    title: 'shared/Flex',
    component: Flex
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Primary = Template.bind({})
Primary.args = {
    max: true,
    align: 'center',
    justify: 'around',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fouth</div>
        </>
    )
}
