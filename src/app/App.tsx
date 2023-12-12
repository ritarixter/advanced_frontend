import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

export default function App() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О компании</Link>
      <AppRouter />
    </div>
  );
}
