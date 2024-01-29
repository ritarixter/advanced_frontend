import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('Main page');

    return (
        <div>
            {t('Главная страница')}
            <Counter/>
        </div>
    );
};

export default MainPage;
