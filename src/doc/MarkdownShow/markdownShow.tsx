import React from "react";
import classNames from "classnames";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css"

const MarkdownIt = require("markdown-it")({
  highlight: function (str: string, lang: string) {
    console.log(lang);
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
  return (
    <div className={classes}>
      {children}
      <div dangerouslySetInnerHTML={{__html: MarkdownIt.render(mdData)}}/>
    </div>
  );
};

export default MarkDownShow;
