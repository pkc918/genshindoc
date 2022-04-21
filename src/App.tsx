import React from "react";
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from "react-router-dom";
import HomePage from "./pages/homepage/home";
import Layout from "./doc/Layout/layout";
import MarkDownShow from "./doc/MarkdownShow/markdownShow";

import Intro from "./markdown/intro.md";
import Install from "./markdown/install.md";
import Started from "./markdown/started.md";

import G from "./Gin";
import ButtonDoc from "./doc/Button/button.doc";
import MenuDoc from "./doc/Menu/menu.doc";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/doc">
          <Route path="/doc" element={<Navigate to="/doc/intro"/>}/>
          <Route path="/doc/intro" element={<Layout><MarkDownShow mdData={Intro}/></Layout>}/>
          <Route path="/doc/install" element={<Layout><MarkDownShow mdData={Install}/></Layout>}/>
          <Route path="/doc/action" element={<Layout><MarkDownShow mdData={Started}/></Layout>}/>
          <Route path="/doc/button" element={<ButtonDoc/>}/>
          <Route path="/doc/menu" element={<MenuDoc/>}/>
        </Route>
        <Route path={"*"} element={<G/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
