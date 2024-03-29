import { type Story } from '@storybook/react'

// eslint-disable-next-line khramov-fsd/layer-imports
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider'
import { cls } from '@/shared/lib/classNames'
import { type Theme } from '@/shared/lib/theme/ThemeContext'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return <ThemeProvider>
        <div className={cls('app', theme)}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
}
