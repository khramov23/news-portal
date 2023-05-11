import { type StateSchema } from '@/app/providers/StoreProvider'

export const getScrollByPath = (path: string) => {
    return (state: StateSchema) => state.scroll[path] || 0
}
