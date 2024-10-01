import style from "./style.module.css";

interface TitleHeaderInterface {
  headerText: string;
}

export const TitleHeader: React.FC<TitleHeaderInterface> = ({ headerText }) => {
  return <h3 className={style.header}>{headerText}</h3>;
};
