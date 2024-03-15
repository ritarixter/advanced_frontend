import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    const dispatch=useAppDispatch()

    useEffect(()=>{
        dispatch(fetchProfileData())
    },[dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
