import React from "react";
import MarkDownShow from "../MarkdownShow/markdownShow";
import Layout from "../Layout/layout";
import menuDoc from "../../markdown/menuDoc.md";
import {Menu} from "genshinui";
import MenuItem from "genshinui/dist/components/Menu/menuItem";
import SubMenu from "genshinui/dist/components/Menu/subMenu";


const MenuDoc: React.FC = () => {
  return (
    <Layout>
      <MarkDownShow mdData={menuDoc}>
        <div className="menudoc">
          <div>
            <h3>vertical</h3>
            <Menu mode={"vertical"}>
              <MenuItem>menu1</MenuItem>
              <MenuItem>menu2</MenuItem>
              <MenuItem>menu3</MenuItem>
              <SubMenu title={"subMenu"}>
                <MenuItem>sub1</MenuItem>
                <MenuItem>sub2</MenuItem>
                <MenuItem>sub3</MenuItem>
              </SubMenu>
            </Menu>
          </div>
          <div>
            <h3>horizontal</h3>
            <Menu mode={"horizontal"}>
              <MenuItem>menu1</MenuItem>
              <MenuItem>menu2</MenuItem>
              <MenuItem>menu3</MenuItem>
              <SubMenu title={"subMenu"}>
                <MenuItem>sub1</MenuItem>
                <MenuItem>sub2</MenuItem>
                <MenuItem>sub3</MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </MarkDownShow>
    </Layout>
  );
};

export default MenuDoc;
