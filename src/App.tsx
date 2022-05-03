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

import More from "./doc/More/more";
import ButtonDoc from "./doc/Button/button.doc";
import MenuDoc from "./doc/Menu/menu.doc";
import IconDoc from "./doc/Icon/icon.doc";
import TransitionDoc from "./doc/Transition/transition.doc";
import InputDoc from "./doc/Input/input.doc";
import ProgressDoc from "./doc/Progress/progress.doc";
import UploadDoc from "./doc/Upload/upload.doc";


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
          <Route path="/doc/icon" element={<IconDoc/>}/>
          <Route path="/doc/transition" element={<TransitionDoc/>}/>
          <Route path="/doc/input" element={<InputDoc/>}/>
          <Route path="/doc/progress" element={<ProgressDoc/>}/>
          <Route path="/doc/upload" element={<UploadDoc/>}/>
        </Route>
        <Route path={"*"} element={<More/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
