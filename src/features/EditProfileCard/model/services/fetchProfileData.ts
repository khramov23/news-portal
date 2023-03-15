import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { type ThunkApi } from 'app/providers/StoreProvider'
import { type Profile } from '../types/profileSchema'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkApi<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
            const response = await extra.api.get<Profile>('/profile')

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue(i18n.t('Неправильный логин или пароль'))
        }
    }
)
