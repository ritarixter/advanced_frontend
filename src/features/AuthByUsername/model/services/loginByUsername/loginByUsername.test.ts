import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { userActions } from 'entities/User';
import { loginByUsername  } from './loginByUsername';

// Мокаем axios
jest.mock('axios')

// Мокаем внутренние функции axios (например axios.post())
const mockedAxios = jest.mocked(axios, true)


describe('correct work LoginByUsername', ()=>{
    test('success login', async ()=>{
        const userValue = {username: 'user', id: 1};
        mockedAxios.post.mockReturnValue(Promise.resolve({data:userValue}))

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: 'user', password: '123'})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    }) 

    test('error login', async ()=>{
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: 'user', password: '123'})
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('Неверный логин или пароль')
    }) 
})