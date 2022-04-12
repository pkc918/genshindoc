import React from "react";
import NavBar from "../NavBar/navBar";

const Layout: React.FC = ({children}) => {
  console.log(children);
  return (
    <>
      <div className="doc">
        <NavBar/>
        {children}
      </div>
    </>

  );
};

export default Layout;
