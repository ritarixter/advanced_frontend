import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div >
            <h1 data-testid="value-title">{counterValue}</h1>
            <button data-testid="increment-btn" type="button" onClick={increment}>{t('increment')}</button>
            <button data-testid="decrement-btn" type="button" onClick={decrement}>{t('decrement')}</button>
        </div>
    );
};
