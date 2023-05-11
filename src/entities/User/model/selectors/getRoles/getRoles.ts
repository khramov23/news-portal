import { type StateSchema } from '@/app/providers/StoreProvider'
import { createSelector } from 'reselect'
import { UserRole } from '../../types/userSchema'

export const getRoles = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(
    getRoles,
    (roles) => roles?.includes(UserRole.ADMIN)
)
export const isUserManager = createSelector(
    getRoles,
    (roles) => roles?.includes(UserRole.MANAGER)
)
