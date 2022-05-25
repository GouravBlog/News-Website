import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="business" pageSize={20} category="business" />}
          />
          <Route
            exact
            path="/business"
            element={<News key="business" pageSize={20} category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={20}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/genral"
            element={<News key="genral" pageSize={20} category="genral" />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" pageSize={20} category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" pageSize={20} category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" pageSize={20} category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" pageSize={20} category="technology" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
