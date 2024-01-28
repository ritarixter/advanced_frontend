import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
    const { t } = useTranslation()
    const onToggleModal = useCallback(()=>{
        setIsAuthModal(prev => !prev)
    },[])
    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ThemeButton.CLEAR_INVERTED}
                onClick={onToggleModal}> {t('Войти')} </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Tempora accusamus mollitia quasi quod
                nesciunt consectetur nobis dolore maxime officia, 
                necessitatibus id minus nostrum ipsa, laborum sequi atque. Commodi, earum optio. </Modal>
        </div>
    )};
