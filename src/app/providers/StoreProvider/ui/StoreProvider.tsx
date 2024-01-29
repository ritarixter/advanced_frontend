import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '..';
import {StateSchema} from '../config/StateSchema'

interface IStoreProvider {
    children?:ReactNode;
    initialState?:DeepPartial<StateSchema>
}

export const StoreProvider: FC<IStoreProvider> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateSchema)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

