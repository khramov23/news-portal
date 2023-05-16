# Storybook

### Общее

В качестве витрины компонентов в проекте используется storybook. Файлы, соответствующие 
паттерну `**/*.stories.ts` являются сторисами и обрабатываются сторибуком

На его основе так же снимаются скриншотные тесты с помощью инструмента Loki

### Конфигурация

Конфигурация сторибука содержится в папке `/config/storybook`. В файле `webpack.config.ts` 
дополняется стандартная webpack-конфигурация, а именно:
- Подключается SCSS-loader
- Отключается стандартная обработка SVG-файлов, подключается плагин SVGR (позволяет импортировать иконки как компоненты)
- Прокидываются переменные окружения
- Настраиваются алиасы, как в production-коде

### Декораторы
В проекте активно используются декораторы для добавления свойств компонентам.
Они хранятся в `/src/shared/config/storybook/decorators`:
- `RouterDecorator` - оборачивает компонент в роутер
- `StoreDecorator` - оборачивает компонент в redux-провайдер
- `StyleDecorator` - импортирует стили приложения
- `SuspenseDecorator` - добавляет обработку загрузки чанка
- `ThemeDecorator` - позволяет менять тему компонента

### Пример сториса:
```ts jsx
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '@/shared/lib/theme/ThemeContext'

import { AddCommentForm } from './AddCommentForm'

export default {
    title: 'entities/AddCommentForm',
    component: AddCommentForm
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

```

