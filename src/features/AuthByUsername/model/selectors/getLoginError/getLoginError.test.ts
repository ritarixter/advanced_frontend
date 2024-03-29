import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "not found",
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual("not found");
    });

    test("should return undefined", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
