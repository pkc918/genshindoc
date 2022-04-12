# 开始使用

请先[安装](/doc/install)本组件库。

然后在你的代码中写入下面的代码

```typescript
import 'genshinui/build/index.css';
import { Button } from "genshinui";
```

就可以使用我的组件了。

### React 单文件组件

代码示例：

```typescript
import React from "react"
import 'genshinui/build/index.css';
import { Button } from "genshinui";

const Demo: React.FC = () => {
  return (
    <Button btnType="primary" size="lg">genshinui</Button>
  )
}
export default Demo;

```
