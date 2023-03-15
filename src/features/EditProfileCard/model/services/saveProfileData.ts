import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from 'app/providers/StoreProvider'
import { type Profile } from '../types/profileSchema'
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm'

export const saveProfileData = createAsyncThunk<Profile, void, ThunkApi<string>>(
    'profile/saveProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
