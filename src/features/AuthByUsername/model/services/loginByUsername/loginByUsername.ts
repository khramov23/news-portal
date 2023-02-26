import { type User, userActions } from 'entities/User'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import i18n from 'i18next'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:5000/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(i18n.t('Неправильный логин или пароль'))
        }
    }
)
