import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { RatingCard } from './RatingCard'

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    args: {
        title: 'Оцените статью',
        feedbackTitle: 'Оставьте отзыв'
    }
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
