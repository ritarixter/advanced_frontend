import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}
export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState)
    const onChangeUsername = useCallback((value:string)=>{
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onChangePassword = useCallback((value:string)=>{
        dispatch(loginActions.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(()=>{
        dispatch(loginByUsername({username, password}))
    },[dispatch, password, username])
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t("Авторизация")}/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input value={username}
                onChange={onChangeUsername} placeholder={t("Введите логин")} type="text"  className={styles.input}/>
            <Input value={password}
                onChange={onChangePassword} placeholder={t("Введите пароль")} type="text" className={styles.input}/>
            <Button onClick={onLoginClick}
                className={styles.loginBtn} theme={ThemeButton.OUTLINE} 
                disabled={isLoading}>{t('Войти')}</Button>
        </div>
    );
});
