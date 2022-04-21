import React from "react";
import {Button} from "genshinui";
import MarkDownShow from "../MarkdownShow/markdownShow";
import buttonDoc from "../../markdown/buttonDoc.md";
import Layout from "../Layout/layout";

const ButtonDoc: React.FC = () => {
  return (
    <Layout>
      <MarkDownShow mdData={buttonDoc}>
        <h3>基础用法</h3>
        <Button btnType="primary">primary</Button>
        <Button btnType="danger">danger</Button>
        <Button btnType="default">genshin</Button>
        <Button hrefLink="https://github.com/XiaoPan-Struggle/genshinui" btnType="link">genshinui</Button>
        <h3>各种尺寸的Button</h3>
        <Button btnType="primary" size="lg">primary</Button>
        <Button btnType="danger" size="df">danger</Button>
        <Button btnType="default" size="sm">genshin</Button>
        <h3>禁用状态</h3>
        <Button disabled>disabled</Button>
        <Button disabled hrefLink="https://github.com/XiaoPan-Struggle/genshinui" btnType="link">genshinui</Button>
      </MarkDownShow>
    </Layout>
  );
};

export default ButtonDoc;
