import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from 'axios'

// Мокаем axios
jest.mock('axios')

// Мокаем внутренние функции axios (например axios.post())
const mockedAxios = jest.mocked(axios, true)

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => 
AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api:jest.MockedFunctionDeep<AxiosStatic>;

    navigate:jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn()
        this.getState = jest.fn()
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }
    
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = action(this.dispatch, this.getState, {api:this.api, navigate: this.navigate})
        return result;
    }
}