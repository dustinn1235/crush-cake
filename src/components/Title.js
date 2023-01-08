import "../css/Title.css";
import { TiStarFullOutline } from "react-icons/ti";

const Title = ({ title }) => {
  return (
    <div className="title-header-wrapper">
      <div className="title-header">
        <TiStarFullOutline></TiStarFullOutline>
        <h1>{title}</h1>
        <TiStarFullOutline></TiStarFullOutline>
      </div>
    </div>
  );
};

export default Title;
