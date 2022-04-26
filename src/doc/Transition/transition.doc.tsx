import React from "react";
import Layout from "../Layout/layout";
import MarkDownShow from "../MarkdownShow/markdownShow";
import transitionDoc from "../../markdown/transitionDoc.md";

const TransitionDoc: React.FC = () => {
  return (
    <Layout>
      <MarkDownShow mdData={transitionDoc}/>
    </Layout>
  );
};
export default TransitionDoc;
