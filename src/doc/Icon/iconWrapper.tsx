import React from "react";
import {Icon} from "genshinui";

interface iconWrapperType {
  iconData: string[];
}

const IconWrapper: React.FC<iconWrapperType> = ({iconData}) => {
  return (
    <>
      <h3>图标</h3>
      <div className="icon-item-wrapper">
        {
          iconData.map((item, index) => {
            return (
              <div key={index} className="icon-item">
                <div className="icon-item-container">
                  {/*@ts-ignore*/}
                  <Icon className="icon" icon={item}/>
                  <h5>{item}</h5>
                </div>
              </div>
            );
          })
        }
        <a className="icon-item" href="https://fontawesome.com/search?s=brands">更多图标</a>
      </div>
    </>
  );
};

export default IconWrapper;
