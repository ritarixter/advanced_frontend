
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProfileSchema, Profile } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState:IProfileSchema = {
    readonly: true,
    isLoading:false,
    data:undefined,
    error: undefined
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false
            })
    },
})

export const { actions: profileActions }=profileSlice;
export const { reducer: profileReducer }=profileSlice;

