import React from "react";
import Layout from "../Layout/layout";
import MarkDownShow from "../MarkdownShow/markdownShow";

const More:React.FC = () =>{
  return(
    <Layout>

      <MarkDownShow mdData={`# 404 正在开发中...`}/>
    </Layout>
  )
}

export default More;
