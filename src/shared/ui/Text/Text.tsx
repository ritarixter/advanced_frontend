import { memo } from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const { className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT } = props;

    const mods: Mods = {
        [styles[align]]: true,
        [styles[theme]]: true
    }
    
    return (
        <div
            className={classNames(styles.Text, mods, [
                className,
            ])}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
