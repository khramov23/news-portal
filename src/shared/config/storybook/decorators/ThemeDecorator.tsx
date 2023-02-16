import { type Story } from '@storybook/react'
import { type Theme } from 'shared/lib/theme/ThemeContext'
import { cls } from 'shared/lib/classNames'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return <div className={cls('app', theme)}>
        <StoryComponent />
    </div>
}
