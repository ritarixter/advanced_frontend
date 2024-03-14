import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IUser, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, ThunkConfig<string>>(
    'users/fetchByIdStatus',
    async (authData, {dispatch, extra, rejectWithValue}) => {
        try{
            // @ts-ignore
            const response = await extra.api.post<IUser>('/login', authData)

            if(!response.data) throw new Error('Ошибка сервера')

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data
        }
        catch (e){
            return rejectWithValue("Неверный логин или пароль")
        }
    },
)

