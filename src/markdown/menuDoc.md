### Menu 基础用法
```tsx
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
```

### Menu 属性

|        属性         |       说明       |   类型    |        可选值         |   默认值   |
| :-----------------: | :--------------: | :-------: | :-------------------: | :--------: |
|        mode         |   菜单展示模式   |  string   | horizontal / vertical | horizontal |
|    defaultIndex     |     默认选中     |  string   |           —           |     —      |
| defaultOpenSubMenus | 默认展开下拉菜单 | string [] |           —           |     —      |

### Menu 事件

|  事件名  |     说明     |            回调参数             |
| :------: | :----------: | :-----------------------------: |
| onSelect | 菜单激活回调 | selectedIndex：选中菜单的 index |

### Menu 内容

| 内容 |      说明      |       子标签       |
| :--: | :------------: | :----------------: |
|  —   | 自定义默认内容 | SubMenu / MenuItem |

### SubMenu 属性

| 属性  |         说明         |  类型  | 可选值 | 默认值 |
| :---: | :------------------: | :----: | :----: | :----: |
| index |    选中的下拉元素    | string |   —    |   —    |
| title | 关闭下拉时展示的内容 | string |   —    |   —    |

### SubMenu 内容

| 内容 |      说明      |  子标签  |
| :--: | :------------: | :------: |
|  —   | 自定义默认内容 | MenuItem |

### MenuItem 属性

|   属性   |    说明    |  类型   | 可选值 | 默认值 |
| :------: | :--------: | :-----: | :----: | :----: |
|  index   | 选中的item | string  |   —    |   —    |
| disabled |  是否禁用  | boolean |   —    | false  |

