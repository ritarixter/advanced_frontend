import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
interface INotFoundPage {
    className?:string
}
export const NotFoundPage: FC<INotFoundPage> = ({className}) => {
  const {t} =  useTranslation()
  return (
    <div className={classNames(styles.NotFoundPage,{},[className])}>
      {t('Страница не найдена')}
    </div>);
}
