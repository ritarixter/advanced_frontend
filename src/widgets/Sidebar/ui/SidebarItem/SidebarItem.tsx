import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { ISidebarItem } from "widgets/Sidebar/model/items";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getAuthUserData } from "entities/User";
import cls from "./SidebarItem.module.scss";

interface SidebarProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getAuthUserData)
    if(item.authOnly && !isAuth) {
        return null
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={`${cls.item} ${collapsed && cls.collapsed}`}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
