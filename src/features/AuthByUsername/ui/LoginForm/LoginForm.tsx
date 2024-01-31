import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./LoginForm.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface ILoginForm {
  className?: string;
}
export const LoginForm: FC<ILoginForm> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <input type="text" />
      <input type="text" />
      <Button>{t('Войти')}</Button>
    </div>
  );
};
