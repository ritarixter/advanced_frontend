import { DeepPartial } from "@reduxjs/toolkit"
import { ILoginSchema } from "../types/LoginSchema"
import { loginActions, loginReducer } from "./loginSlice"

describe('correct work LoginSlice', ()=>{
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = {username: 'admin'}
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('superuser'))).toStrictEqual({username: 'superuser'})
    })

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {password: '123456'}
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('qwerty'))).toStrictEqual({password: 'qwerty'})
    })
})