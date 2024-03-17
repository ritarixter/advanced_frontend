import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import cls from "./ProfilePageHeader.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfilePageHeader = memo((props: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const { className } = props;
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            {readonly ? (
                <Button
                    className={cls.btn}
                    onClick={onEdit}
                    theme={ThemeButton.OUTLINE}
                >
                    {t("Редактировать")}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.btn}
                        onClick={onSave}
                        theme={ThemeButton.OUTLINE}
                    >
                        {t("Сохранить")}
                    </Button>
                    <Button
                        className={cls.cancelBtn}
                        onClick={onCancelEdit}
                        theme={ThemeButton.OUTLINE_RED}
                    >
                        {t("Отмена")}
                    </Button>
                </>
            )}
        </div>
    );
});
