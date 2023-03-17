import { type StateSchema } from 'app/providers/StoreProvider'

export const getRouterMounted = (state: StateSchema) => state.user?._routerMounted
