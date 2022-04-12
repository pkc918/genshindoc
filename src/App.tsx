import React from "react";
import HomePage from "./pages/home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          {/*<Route index element={<Home/>}/>*/}
          {/*<Route path="teams" element={<Teams/>}>*/}
          {/*  <Route path=":teamId" element={<Team/>}/>*/}
          {/*  <Route path="new" element={<NewTeamForm/>}/>*/}
          {/*  <Route index element={<LeagueStandings/>}/>*/}
          {/*</Route>*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
