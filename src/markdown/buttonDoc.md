### 基础用法

使用 `btnType` 来定义按钮的样式。

```tsx
import {Button} from "genshinui";

export default () => (
  <>
    <Button btnType="primary">primary</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="default">genshin</Button>
    <Button hrefLink="https://github.com/XiaoPan-Struggle/genshinui" btnType="link">genshinui</Button>
  </>
);
```

### 各种尺寸的Button

除了默认尺寸外，Button 组件还提供了三种额外的尺寸供您在不同的场景中选择。

使用 `size` 属性额外配置尺寸，可使用 `lg`和`sm`两种值。

```tsx
import {Button} from "genshinui";

export default () => (
  <>
    <Button btnType="primary" size="lg">primary</Button>
    <Button btnType="danger" size="df">danger</Button>
    <Button btnType="default" size="sm">genshin</Button>
  </>
);

```

### 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

```tsx
import {Button} from "genshinui";

export default () => (
  <>
    <Button disabled>disabled</Button>
    <Button disabled hrefLink="https://github.com/XiaoPan-Struggle/genshinui" btnType="link">genshinui</Button>
  </>
);
```

### Button 的属性

|   属性   |   说明   |  类型   |              可选值               | 默认值  |
| :------: | :------: | :-----: | :-------------------------------: | :-----: |
| btnType  |   类型   | string  | primary / danger / default / link | default |
|   size   |   大小   | string  |           lg / sm / df            |   df    |
| disabled | 禁用状态 | boolean |           true / false            |  false  |
| hrefLink | 跳转路径 | string  |                 —                 |    —    |

