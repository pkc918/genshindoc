import React, {useState} from "react";
import Icon from "../../icons/icon";
import classNames from "classnames";
import {Link, NavLink} from "react-router-dom";

type navLinkType = {
  toPath: string,
  btnName: string
}

const navLinkData: navLinkType[] = [{
  toPath: "/doc/intro",
  btnName: "介绍"
}, {
  toPath: "/doc/install",
  btnName: "安装"
}, {
  toPath: "/doc/action",
  btnName: "开始使用"
}, {
  toPath: "/doc/button",
  btnName: "Button 按钮"
}, {
  toPath: "/doc/menu",
  btnName: "Menu 菜单"
}, {
  toPath: "/doc/icon",
  btnName: "Icon 图标"
}, {
  toPath: "/doc/transition",
  btnName: "Transition 动画"
}, {
  toPath: "/doc/input",
  btnName: "Input 输入框"
}, {
  toPath: "/doc/progress",
  btnName: "Progress 进度条"
}, {
  toPath: "/doc/upload",
  btnName: "Upload 上传"
}, {
  toPath: "/doc/more",
  btnName: "敬请期待"
}];

const NavBar: React.FC = () => {
  const [isShow, setIsShow] = useState<Boolean>(true);
  const classes = classNames("navBar", isShow ? "show" : "hidden");

  return (
    <nav className={classes}>
      <Link to="/"><h1>Genshin UI</h1></Link>
      <div className="docMenu">
        {
          navLinkData.map((v, i) => {
            return (
              <NavLink className={(navData) => navData.isActive ? "checkedBar" : ""} key={i}
                       to={v.toPath}>{v.btnName}</NavLink>
            );
          })
        }
      </div>
      <button className="isShow" onClick={() => setIsShow(!isShow)}>
        {
          isShow ? <Icon classname="icon" linkId="show"/> : <Icon classname="icon" linkId="hidden"/>
        }
      </button>
    </nav>
  );
};

export default NavBar;
