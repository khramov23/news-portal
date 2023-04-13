import { type ReactElement, type SVGProps } from 'react'

export interface SidebarItemType {
    path: string
    Icon: (props: SVGProps<SVGElement>) => ReactElement
    text: string
    authOnly?: boolean
}
