import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface IPageLoader {
  className?: string;
}
export const PageLoader = memo(({ className }:IPageLoader) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
