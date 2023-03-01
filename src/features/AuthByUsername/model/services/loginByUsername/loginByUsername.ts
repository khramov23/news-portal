import { type User, userActions } from 'entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import i18n from 'i18next'
import { type ThunkApi } from 'app/providers/StoreProvider'
import { RoutePath } from 'shared/config/routes/routes.config'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkApi<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI
        try {
            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            extra.navigate(RoutePath.profile)

            return response.data
        } catch (e) {
            return rejectWithValue(i18n.t('Неправильный логин или пароль'))
        }
    }
)
