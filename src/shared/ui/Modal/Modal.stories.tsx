import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Aliquid animi architecto beatae blanditiis commodi consequatur ' +
            'dolore error, id mollitia obcaecati optio possimus, quasi ' +
            'repellat sint sit soluta tempora unde veritatis.',
        isOpen: true
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
