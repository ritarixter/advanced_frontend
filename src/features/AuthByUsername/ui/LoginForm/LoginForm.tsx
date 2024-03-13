import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {  useSelector } from "react-redux";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getLoginUsername } 
    from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import styles from "./LoginForm.module.scss";

const initialReducers:ReducersList = {
    loginForm: loginReducer
}

export interface LoginFormProps {
  className?: string;
  onSuccess: ()=>void;
}
const LoginForm = memo(({ className, onSuccess }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback((value:string)=>{
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onChangePassword = useCallback((value:string)=>{
        dispatch(loginActions.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(async ()=>{
        const result = await dispatch(loginByUsername({username, password}));
        if(result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    },[dispatch, onSuccess, password, username])
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(styles.LoginForm, {}, [className])}>
                <Text title={t("Авторизация")}/>
                {error && <Text text={t("Неверный логин или пароль")} theme={TextTheme.ERROR}/>}
                <Input value={username}
                    onChange={onChangeUsername} placeholder={t("Введите логин")} type="text"  className={styles.input}/>
                <Input value={password}
                    onChange={onChangePassword} placeholder={t("Введите пароль")} type="text" className={styles.input}/>
                <Button onClick={onLoginClick}
                    className={styles.loginBtn} theme={ThemeButton.OUTLINE} 
                    disabled={isLoading}>{t('Войти')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;