import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profileSchema'

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
            return rejectWithValue('error')
        }
    }
)