import React from "react";
import classNames from "classnames";

const hljs = require("highlight.js");
const MarkdownIt = require("markdown-it")({
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return "<pre class=\"hljs\"><code>" +
          hljs.highlight(str, {language: lang, ignoreIllegals: true}).value +
          "</code></pre>";
      } catch (__) {}
    }
    return "<pre class=\"hljs\"><code>" + MarkdownIt.utils.escapeHtml(str) + "</code></pre>";
  }
});



interface mdStr {
  mdData: string
  className?: string
}

const MarkDownShow: React.FC<mdStr> = ({mdData, className, children}) => {
  const classes = classNames("doc_md markdown-body", className);
  console.log(MarkdownIt.render(mdData));
  return (
    <div className={classes}>
      {children}
      <div dangerouslySetInnerHTML={{__html: MarkdownIt.render(mdData)}}/>
    </div>
  )
};

export default MarkDownShow;
