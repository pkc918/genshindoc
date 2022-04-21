import React from "react";
import MarkDownShow from "../MarkdownShow/markdownShow";
import Layout from "../Layout/layout";
import menuDoc from "../../markdown/menuDoc.md";
import {Menu} from "genshinui";


const MenuDoc: React.FC = () => {
  return (
    <Layout>
      <MarkDownShow mdData={menuDoc}>
        <div className="menudoc">
          <div>
            <h3>vertical</h3>
            <Menu mode={"vertical"}>
              <Menu.Item>menu1</Menu.Item>
              <Menu.Item>menu2</Menu.Item>
              <Menu.Item>menu3</Menu.Item>
              <Menu.SubMenu title={"subMenu"}>
                <Menu.Item>sub1</Menu.Item>
                <Menu.Item>sub2</Menu.Item>
                <Menu.Item>sub3</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
          <div>
            <h3>horizontal</h3>
            <Menu mode={"horizontal"}>
              <Menu.Item>menu1</Menu.Item>
              <Menu.Item>menu2</Menu.Item>
              <Menu.Item>menu3</Menu.Item>
              <Menu.SubMenu title={"subMenu"}>
                <Menu.Item>sub1</Menu.Item>
                <Menu.Item>sub2</Menu.Item>
                <Menu.Item>sub3</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
        </div>
      </MarkDownShow>
    </Layout>
  );
};

export default MenuDoc;
