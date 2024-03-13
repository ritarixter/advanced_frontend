import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const authData = useSelector(getAuthUserData)

    const onCloseModal = useCallback(()=>{
        setIsAuthModal(false)
    },[])

    const onShowModal = useCallback(()=>{
        setIsAuthModal(true)
    },[])

    const onLogout = useCallback(()=>{
        dispatch(userActions.logout())
    },[dispatch])

    if(authData){
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button className={cls.links} theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onLogout}> {t('Выйти')} </Button>
            </div>
        )
    }

    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ThemeButton.CLEAR_INVERTED}
                onClick={onShowModal}> {t('Войти')} </Button>
            {isAuthModal &&  <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
           
        </div>
    )});
