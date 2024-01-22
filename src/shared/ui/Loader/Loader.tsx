import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";
interface ILoader {
  className?: string;
}
export const Loader: FC<ILoader> = ({ className }) => {
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
