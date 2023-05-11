import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from '@/app/providers/StoreProvider'
import { type Profile, ValidateError } from '../../types/profileSchema'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const saveProfileData = createAsyncThunk<Profile, void, ThunkApi<ValidateError[]>>(
    'profile/saveProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI

        const formData = getProfileForm(getState())

        if (!formData?.id) {
            return rejectWithValue([ValidateError.SERVER_ERROR])
        }

        const errors = validateProfileData(formData)
        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile/' + formData.id, formData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue([ValidateError.SERVER_ERROR])
        }
    }
)
