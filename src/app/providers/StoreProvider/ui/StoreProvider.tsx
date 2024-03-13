import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '..';
import {StateSchema} from '../config/StateSchema'

interface IStoreProvider {
    children?:ReactNode;
    initialState?:DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<IStoreProvider> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

