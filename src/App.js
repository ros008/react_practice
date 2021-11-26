import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import RenderingBasic from "./components/renderingBasic/rendering";
import Rerendering from "./components/rerendering/Rerendering";
import UseReducer from "./components/useReducer/UseReducer";
import ReduxPractice from "./components/redux/ReduxPractice";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/aboutRendering">렌더링 기초</Link>
        </li>
        <li>
          <Link to="/aboutRerendering">리렌더링</Link>
        </li>
        <li>
          <Link to="/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/redux">Redux</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/aboutRendering" element={<RenderingBasic />} />
        <Route path="/aboutRerendering" element={<Rerendering />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/redux" element={<ReduxPractice />} />
      </Routes>
    </div>
  );
}

export default App;
