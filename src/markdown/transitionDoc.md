### Transition 基本用法

```tsx
<Transition
    in={true}
    timeout={300}
    animation="zoom-in-top"
>
  {/* 子组件 */}
</Transition>
```

### Transition 属性

|   属性    |   说明   |  类型   |                            可选值                            | 默认值 |
| :-------: | :------: | :-----: | :----------------------------------------------------------: | :----: |
| animation | 动画效果 | string  | "zoom-in-top" \| "zoom-in-left" \| "zoom-in-bottom" \| "zoom-in-right" |   —    |
|  wrapper  | 内容包裹 | boolean |                        true \| false                         |   —    |

