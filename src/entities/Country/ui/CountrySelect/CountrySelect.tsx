import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Country } from "entities/Country/model/types/country";


interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?:boolean;
}

const options = [
    { value: Country.Armenia, content: "Армения" },
    { value: Country.Belarus, content: "Беларусь" },
    { value: Country.Kazakhstan, content: "Казахстан" },
    { value: Country.Russia, content: "Россия" },
];
export const CountrySelect = memo(({
    className,
    value,
    onChange,
    readonly
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = (value:string)=>{
        onChange?.(value as Country)
    }
    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            label={t("Укажите страну")}
            className={classNames("", {}, [className])}
            options={options}
            readonly={readonly}
        />
    );
});
