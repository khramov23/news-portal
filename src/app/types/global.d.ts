declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.gif'

declare module '*.svg' {
    import { type ReactElement, type SVGProps } from 'react'
    const content: (props: SVGProps<SVGElement>) => ReactElement
    export default content
}

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
}
