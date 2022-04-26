import React from "react";
import Layout from "../Layout/layout";
import MarkDownShow from "../MarkdownShow/markdownShow";
import inputDoc from "../../markdown/inputDoc.md";
import {AutoComplete, Input} from "genshinui";

const InputDoc: React.FC = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({items}) => {
        return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
      })
  }
  return (
    <Layout>
      <MarkDownShow mdData={inputDoc}>
        <h3>基础用法</h3>
        <Input/>
        <h3>禁用状态</h3>
        <Input disabled />
        <h3>带 icon 的输入框</h3>
        <Input icon={"face-angry"} />
        <h3>复合型输入框</h3>
        <Input prepend={"https://"} />
        <Input append={".com"} />
        <Input prepend={"https://"} append={".com"} />
        <h3>不同尺寸的输入框</h3>
        <Input prepend={"lg"} size={"lg"} />
        <Input prepend={"sm"} size={"sm"} />
        <h3>远程搜索</h3>
        <AutoComplete
          onSelect={(item) => console.log(item)}
          fetchSuggestions={handleFetch}/>
      </MarkDownShow>
    </Layout>
  );
};

export default InputDoc;
