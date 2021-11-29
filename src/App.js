import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import RenderingBasic from "./components/renderingBasic/rendering";
import Rerendering from "./components/rerendering/Rerendering";
import UseReducer from "./components/useReducer/UseReducer";
import ReduxPractice from "./components/redux/ReduxPractice";
import ReduxModule from "./components/reduxModule/ReduxModule";
import PostListPage from "./components/reduxModule/PostListPage";
import PostPage from "./components/reduxModule/PostPage";

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
        <li>
          <Link to="/reduxModule">ReduxModule</Link>
        </li>
        <li>
          <Link to="/post">ReduxModule2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/aboutRendering" element={<RenderingBasic />} />
        <Route path="/aboutRerendering" element={<Rerendering />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/redux" element={<ReduxPractice />} />
        <Route path="/reduxModule" element={<ReduxModule />} />
        <Route path="/post" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
