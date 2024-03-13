import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { EnhancedStore } from "@reduxjs/toolkit/dist/configureStore";
import { ICounterSchema } from "entities/Counter";
import { IUserSchema } from "entities/User";
import { ILoginSchema } from "features/AuthByUsername";

export interface StateSchema {
    counter:ICounterSchema;
    user: IUserSchema;

    // Асинхронные редюсеры
    loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof StateSchema; 

export interface ReducerManager {
    getReducerMap: ()=>ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManager;
    
}
