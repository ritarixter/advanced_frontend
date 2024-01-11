import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
interface ILangSwitcher {
  className?: string;
}
export const LangSwitcher: FC<ILangSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggle}
      theme={ThemeButton.CLEAR}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >{t("Язык")}</Button>
  );
};
