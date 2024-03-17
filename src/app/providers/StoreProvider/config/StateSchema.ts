import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { EnhancedStore } from "@reduxjs/toolkit/dist/configureStore";
import { AxiosInstance } from "axios";
import { ICounterSchema } from "entities/Counter";
import { IProfileSchema } from "entities/Profile";
import { IUserSchema } from "entities/User";
import { ILoginSchema } from "features/AuthByUsername";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
    counter:ICounterSchema;
    user: IUserSchema;

    // Асинхронные редюсеры
    loginForm?: ILoginSchema;
    profile?:IProfileSchema;
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

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to:To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra:ThunkExtraArg,
    state: StateSchema
}