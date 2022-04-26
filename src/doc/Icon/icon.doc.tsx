import React from "react";
import Layout from "../Layout/layout";
import MarkDownShow from "../MarkdownShow/markdownShow";
import IconWrapper from "./iconWrapper";
import iconDoc from "../../markdown/iconDoc.md";

const IconDoc: React.FC = () => {
  const icons = [
    "coffee", "angle-down", "angle-left", "angle-right", "angle-up",
    "face-angry", "angles-down", "angles-left", "angles-right", "angles-up",
  ];

  return (
    <Layout>
      <MarkDownShow mdData={iconDoc}>
        <IconWrapper iconData={icons}/>
      </MarkDownShow>
    </Layout>
  );
};

export default IconDoc;
