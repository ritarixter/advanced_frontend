import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface INavbar {
  className?: string;
}

export function Navbar({ className }: INavbar) {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
     
      <div className={styles.links}>
        <AppLink to="/" className={styles.mainLink} theme={AppLinkTheme.INVERTED}>
          Главная
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED}>О компании</AppLink>
      </div>
    </div>
  );
}
