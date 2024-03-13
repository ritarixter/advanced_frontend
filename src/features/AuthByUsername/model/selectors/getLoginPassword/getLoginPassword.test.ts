import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";


describe("getLoginError.test", () => {
    test("should return 123456", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "123456",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123456');
    });

    test("should return empty", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
