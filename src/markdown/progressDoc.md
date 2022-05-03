### 基本用法

```tsx
import {Progress} from "genshinui";

export default () => (
  <>
    <Progress strokeHeight={60} theme="primary" percent={20}/>
    <Progress theme="secondary" percent={30} showText={false}/>
    <Progress theme="success" percent={40}/>
    <Progress theme="info" percent={50}/>
    <Progress theme="warning" percent={70}/>
    <Progress theme="danger" percent={80}/>
    <Progress theme="dark" percent={100}/>
  </>
);
```

### Progress 属性

|     属性     |        说明        |    类型    |    可选值    | 默认值  |
| :----------: | :----------------: | :--------: | :----------: | :-----: |
|   percent    |    百分比，必填    |   number   |    0-100     |    —    |
| strokeHeight |     进度条高度     |   number   |      —       |   15    |
|   showText   | 是否在内部展示文字 |  boolean   | true / false |  true   |
|    theme     |   进度条主题颜色   | ThemeProps |  ThemeProps  | primary |

