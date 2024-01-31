import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './LoginModal.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModal {
  className?: string;
}
export const LoginModal: FC<ILoginModal> = ({ className }) => (
    <Modal className={classNames('lds-ellipsis', {}, [className])}>
        <LoginForm />
    </Modal>
);
