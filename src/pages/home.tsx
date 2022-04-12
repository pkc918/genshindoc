import React from "react";
import {Link} from "react-router-dom";
// import Icon from "../Icon/icon";

const HomePage: React.FC = () => {
  return (
    <div className='home'>
      <nav className="home_nav">
        <div className="topBar">
          <div className="container">
            <Link to="/">
              <div className="logo">
                Genshin UI
              </div>
            </Link>
            <ul>
              <li>
                <Link to="/doc">
                  文档
                </Link>
              </li>
              <li>
                <a href="https://www.yuque.com/u5019886/dylh6b">
                  {/*<Icon linkId="yuque"/>*/}
                </a>
              </li>
              <li>
                <a href="https://github.com/XiaoPan-Struggle/Genshin_UI">
                  {/*<Icon linkId="Github"/>*/}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main">
          <a href="https://github.com/XiaoPan-Struggle/Genshin_UI">
            <div className="introduction">
              {/*<Icon linkId="Github"/>*/}
              <h3>Github</h3>
            </div>
          </a>
          <ul>
            <li>
              {/*<Icon classname={"react-icon"} linkId="React"/>*/}
              <div>
                <h1>React 函数组件</h1>
                <span>
                  使用React函数组件，全面拥抱Hooks
                </span>
              </div>
            </li>
            <li>
              {/*<Icon linkId="typescript"/>*/}
              <div>
                <h1>基于 Typescript</h1>
                <span>
                  源代码采用 TypeScript 书写（非严格检查）
                </span>
              </div>
            </li>
          </ul>
          <Link to="/doc/action">
            <div className="introduction">
              {/*<Icon linkId="Action"/>*/}
              <h3>开始使用</h3>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
