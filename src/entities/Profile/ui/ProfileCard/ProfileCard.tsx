import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError} from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?:string;
}

export const ProfileCard = memo(({className}: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>  
                <Text title={t('Профиль')}/> 
                <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>{t('Редактировать')}</Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} className={cls.input} placeholder={t("Ваше имя")}/>
                <Input value={data?.lastname} className={cls.input} placeholder={t("Ваша фамилия")}/>
            </div>
        </div>
    );
});

