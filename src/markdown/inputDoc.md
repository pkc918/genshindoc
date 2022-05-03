### 基础用法

```tsx
import {Input} from "genshinui";

export default () => (
  <>
    <Input/>
  </>
);
```

### 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

```tsx
import {Input} from "genshinui";

export default () => (
  <>
    <Input disabled/>
  </>
);

```

### 带icon的输入框

添加图标以显示输入框类型

```tsx
import {Input} from "genshinui";

export default () => (
  <>
    <Input icon={"face-angry"}/>
  </>
);
```

### 复合型输入框

添加前缀或后缀元素，通常是标签或按钮。

可通过 `prepend` 和 `append` 属性来指定在 input 中前置或者后置内容。

```tsx
import {Input} from "genshinui";

export default () => (
  <>
    <Input prepend={"https://"}/>
    <Input append={".com"}/>
    <Input prepend={"https://"} append={".com"}/>
  </>
);
```

### 不同尺寸输入框

设置 `size` 属性可以控制输入框的大小， 除了默认大小外，还有另外两个选项 `lg` 和 `sm`。

```tsx
import {Input} from "genshinui";

export default () => (
  <>
    <Input prepend={"lg"} size={"lg"}/>
    <Input prepend={"sm"} size={"sm"}/>
  </>
);
```

### 远程搜索

从服务端搜索数据

```tsx
import {AutoComplete} from "genshinui";

export default () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({items}) => {
        return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
      })
  }

  const renderOption = (item: DataSourceType) => {
    return (
      <>
        <div>Name: {item}</div>
      </>
    )
  }
  
  return(
    <>
      <AutoComplete
        renderOption={renderOption}
        onSelect={(item) => console.log(item)}
        fetchSuggestions={handleFetch}
      />
    </>
  )
}
```

### Input 属性

|   属性   |   说明   |  类型   |    可选值     | 默认值 |
| :------: | :------: | :-----: | :-----------: | :----: |
| disabled | 禁用状态 | boolean | true \| false | false  |
|   size   |   大小   | string  | "lg" \| "sm"  |   md   |
|   icon   |   图标   | string  |       —       |   —    |
| prepend  | 前置内容 | string  |       —       |   —    |
|  append  | 后置内容 | string  |       —       |   —    |

### Input 事件

| 事件名 | 说明 | 参数 | | :------: | :--------: | :--: | | onChange | 输入时触发 | — |

### Autocomplete 事件

|      事件名      |      说明      |          参数          |
| :--------------: | :------------: | :--------------------: |
| fetchSuggestions |    发起请求    |    (query: string)     |
|     onSelect     | 数据框选择事件 | (item: DataSourceType) |
|   renderOption   | 自定义渲染模板 | (item: DataSourceType) |

