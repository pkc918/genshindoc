import React from "react";
import classNames from "classnames";

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("./", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type IconProps = {
  linkId: string,
  classname?: string
}
const Icon: React.FC<IconProps> = ({linkId, classname}) => {
  const classes = classNames("genshin-icon", classname);
  return (
    <svg aria-hidden="true" className={classes}>
      <use xlinkHref={`#icon-${linkId}`}/>
    </svg>
  );
};

export default Icon;
