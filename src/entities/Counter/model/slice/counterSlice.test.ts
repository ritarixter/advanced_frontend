import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/CounterSchema";

describe("counterReducer", () => {
    test("correct decrement", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });

    test("correct increment", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });

    test("should work with empty state", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
