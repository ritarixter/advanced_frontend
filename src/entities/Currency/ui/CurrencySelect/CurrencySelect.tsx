import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?:boolean;
}

const options = [
    { value: Currency.EUR, content: "Евро" },
    { value: Currency.RUB, content: "Рубли" },
    { value: Currency.USD, content: "Доллары" },
];
export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readonly
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = (value:string)=>{
        onChange?.(value as Currency)
    }
    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            label={t("Укажите валюту")}
            className={classNames("", {}, [className])}
            options={options}
            readonly={readonly}
        />
    );
});
