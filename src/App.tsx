import React from "react";
import HomePage from "./pages/home";
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from "react-router-dom";
import Layout from "./doc/Layout/layout";
// import G from "./Gin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/doc">
          <Route path="/doc" element={<Navigate to="/doc/intro"/>}/>
          <Route path="/doc/intro" element={<Layout/>}/>
        </Route>
        {/*<Route path={"*"} element={<G/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
