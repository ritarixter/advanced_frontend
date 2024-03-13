import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { ISidebarItem } from "widgets/Sidebar/model/items";
import { memo } from "react";
import cls from "./SidebarItem.module.scss";

interface SidebarProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
