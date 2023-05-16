## Запуск проекта
```
npm run start:dev - запуск клиента и сервера
```
или:
```
npm start - запуск клиента (webpack)
npm run server:start - запуск сервера
```
или
```
npm run vite-start - запуск клиента (vite)
npm run server:start - запуск сервера
```
----
## Скрипты

- `npm start` - Запуск клиента (webpack)
- `npm run vite-start` - Запуск клиента (vite)
- `npm run start:dev` - Запуск клиента (webpack) и сервера
- `npm run server:start` - Запуск сервера
- `npm run build:prod` - Production-сборка проекта
- `npm run build:dev` - Development-сборка проекта
- `npm run lint:ts` - Проверка ts, tsx - файлов линтером eslint 
- `npm run lint:ts:fix` - Проверка ts, tsx - файлов линтером eslint и устранение проблем 
- `npm run lint:scss` - Проверка scss-файлов линтером stylelint
- `npm run lint:scss:fix` - Проверка scss-файлов линтером stylelint и устранение проблем
- `npm run test:unit` - Unit-тестирование при помощи Jest
- `npm run test:ui` - Скриншотное тестирование при помощи Loki
- `npm run test:ui:ok` - Подтверждение изменений скриншотов
- `npm run test:ui:ci` - Скриншотное тестирование при помощи Loki в github CI
- `npm run test:ui:json` - Генерация json-файла отчета по тестам
- `npm run test:ui:html` - Генерация веб-интерфейса отчета по тестам на основе json
- `npm run test:ui:report` - Генерация json-файла отчета и веб-интерфейса на его основе
- `npm run storybook` - Запуск storybook в режиме разработки
- `npm run storybook:build` - Сборка storybook
- `npm run generate:slice` - Скрипт для генерации FSD-слайса

----
## Архитектура проекта

При разработке данного проекта использовалась архитектурная методология Feature Sliced Design 

Ссылка на документацию - [документация Feature Sliced Design](https://feature-sliced.design/)

---

## Работа с данными

Взаимодействие данными осуществляется с помощью `redux-toolkit`.

Некоторые переиспользуемые сущности нормализуются с помощью `EntityAdapter`.

Запросы на сервер отправляются как с помощью `Async Thunks`, так и с помощью `RTK Query`

Для асинхронного подключения редюсеров используется [DynamicModuleLoader](./src/shared/lib/components/DynamicModuleLoader)

Ссылка на документацию - [документация Redux Toolkit](https://redux-toolkit.js.org/)

----
## Интернационализация

Для работы с переводами использовалась библиотека i18next. Файлы с переводами хранятся в public/locales

Ссылка на документацию - [документация i18next](https://www.i18next.com/)

----

## Тестирование

В проекте используются 3 вида тестов:
1) Unit-тестирование при помощи jest `npm run test:unit`
2) Тестирование react-компонентов при помощи React Testing Library `npm run test:unit`
3) Скриншотное тестирование при помощи Loki `npm run test:ui`

----

## Линтинг

Линтинг в проекте осуществляется с помощью `eslint` (ts и tsx файлы), так же для линтинга scss-файлов используется `stylelint`

Для строгого контроля архитектурных принципов Feature Sliced Design был создан eslint-плагин `eslint-plugin-khramov-fsd`, который включает в себя правила:
1) `path-checker` - запрещает использовать абсолютные импорты в рамках одного модуля
2) `public-api-imports` - запрещает абсолютный импорт сущностей других модулей не из Public API
3) `layer-imports` - запрещает импорт вышележащих слоев (соблюдается древовидная структура)

#### Запуск линтеров
- `npm run lint:ts` - Линтинг ts, tsx - файлов с помощью eslint
- `npm run lint:ts:fix` - Линтинг ts, tsx - файлов с помощью eslint с автофиксом
- `npm run lint:scss` - Линтинг scss - файлов с помощью stylelint
- `npm run lint:scss:fix` - Линтинг scss - файлов с помощью stylelint с автофиксом

----
 
## Storybook

В качестве витрины компонентов используется storybook.

Подробнее про использование в проекте - [использование storybook](./docs/storybook.md)

Ссылка на документацию - [документация storybook](https://storybook.js.org/)

---

## Конфигурация

Проект сконфигурирован с помощью `webpack`, но существует альтернативная dev-сборка на `vite`

Конфиги:
1) Webpack - `webpack.config.ts`- точка входа, `/config/build` - вся конфигурация
2) Vite - `vite.config.ts`

Оба сборщика одинаково работают в dev-режиме, адаптированы под все фичи приложения

Вся конфигурация проекта находится в `/config`:
- `/config/babel` - babel-плагины
- `/config/jest` - конфигурация тестовой среды, mock-компоненты для тестов
- `/config/storybook` - конфигурация storybook, 

В папке `/scripts` хранятся скрипты для кодогенерации, автоматического рефакторинга и генерации отчетов

---

## CI Pipeline

Конфигурация github actions находится в `/.github/workflows/main.yml`

Там прогоняются все виды тестов, проверяется сборка storybook, сборка проекта в production-режиме

---

## Pre commit хуки

В прекоммит хуках прогоняется линтер по ts, tsx и scss файлам

---
## Cущности (entities)

- [Article](./src/entities/Article)
- [Comment](./src/entities/Comment)
- [Country](./src/entities/Country)
- [Currency](./src/entities/Currency)
- [Notification](./src/entities/Notification)
- [Profile](./src/entities/Profile)
- [Rating](./src/entities/Rating)
- [User](./src/entities/User)

---
## Фичи (features)

- [ArticleComments](./src/features/ArticleComments)
- [ArticleRating](./src/features/ArticleRating)
- [ArticleRecommendations](./src/features/ArticleRecommendations)
- [AuthByUsername](./src/features/AuthByUsername)
- [AvatarDropdown](./src/features/AvatarDropdown)
- [EditProfileCard](./src/features/EditProfileCard)
- [LangSwitcher](./src/features/LangSwitcher)
- [NotificationButton](./src/features/NotificationButton)
- [ScrollRestoration](./src/features/ScrollRestoration)
- [ThemeSwitcher](./src/features/ThemeSwitcher)

---



