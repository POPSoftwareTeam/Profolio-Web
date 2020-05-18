import React from "react";
import "../../css/form.scss";

interface MainButtonProps{
    text: string,
    onClick(e: React.MouseEvent<HTMLElement>): void,
}
const MainButton: React.FC<MainButtonProps> = (props) => {
  return (
    <div className="button" 
      onClick={props.onClick}
    >
      <span>{props.text}</span>
      <svg>
        <polyline
          className="o1"
          points="0 0, 150 0, 150 55, 0 55, 0 0"
        ></polyline>
        <polyline
          className="o2"
          points="0 0, 150 0, 150 55, 0 55, 0 0"
        ></polyline>
      </svg>
    </div>
  );
};
export default MainButton;