import { profileReducer } from 'entities/Profile';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer
}

const AboutPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    );
});

export default AboutPage;
