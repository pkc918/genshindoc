import React from "react";
import Layout from "../Layout/layout";
import MarkDownShow from "../MarkdownShow/markdownShow";
import progressDoc from "../../markdown/progressDoc.md";
import {Progress} from "genshinui";


const ProgressDoc: React.FC = () => {
  return (
    <Layout>
      <MarkDownShow mdData={progressDoc}>
        <div className="progress">
          <Progress strokeHeight={60} theme="primary" percent={20}/>
          <Progress theme="secondary" percent={30} showText={false}/>
          <Progress theme="success" percent={40}/>
          <Progress theme="info" percent={50}/>
          <Progress theme="warning" percent={70}/>
          <Progress theme="danger" percent={80}/>
          <Progress theme="dark" percent={100}/>
        </div>
      </MarkDownShow>
    </Layout>
  );
};

export default ProgressDoc;
