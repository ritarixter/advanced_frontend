import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { IUser, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, {rejectValue: string}>(
    'users/fetchByIdStatus',
    async (authData, thunkAPI) => {
        try{
            const response = await axios.post<IUser>('http://localhost:8000/login', authData)

            if(!response.data) throw new Error('Ошибка сервера')

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        }
        catch (e){
            return thunkAPI.rejectWithValue(i18n.t("Неверный логин или пароль"))
        }
    },
)
