import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}
export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input placeholder={t("Введите логин")} type="text"  className={styles.input}/>
            <Input placeholder={t("Введите пароль")} type="text" className={styles.input}/>
            <Button className={styles.loginBtn} theme={ThemeButton.BACKGROUND_INVERTED}>{t('Войти')}</Button>
        </div>
    );
};
