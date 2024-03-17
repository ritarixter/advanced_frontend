import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { userActions } from 'entities/User';
import { loginByUsername  } from './loginByUsername';



describe('correct work LoginByUsername', ()=>{
    test('success login', async ()=>{
        const userValue = {username: 'user', id: 1};
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({data:userValue}))
        const result = await thunk.callThunk({username: 'user', password: '123'})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    }) 

    test('error login', async ()=>{
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk({username: 'user', password: '123'})
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('Неверный логин или пароль')
    }) 
})