import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '..';
import {StateSchema} from '../config/StateSchema'

interface IStoreProvider {
    children?:ReactNode;
    initialState?:StateSchema
}

export const StoreProvider: FC<IStoreProvider> = ({ children, initialState }) => {
    const store = createReduxStore(initialState)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

