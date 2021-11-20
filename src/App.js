import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News pageSize={5} category="general" key="general" />}
            />
            <Route
              exact
              path="business"
              element={<News pageSize={5} category="business" key="business" />}
            />
            <Route
              exact
              path="entertainment"
              element={
                <News
                  pageSize={5}
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="general"
              element={<News pageSize={5} category="general" key="general" />}
            />

            <Route
              exact
              path="health"
              element={<News pageSize={5} category="health" key="health" />}
            />

            <Route
              exact
              path="science"
              element={<News pageSize={5} category="science" key="science" />}
            />

            <Route
              exact
              path="sports"
              element={<News pageSize={5} category="sports" key="sports" />}
            />

            <Route
              exact
              path="technology"
              element={
                <News pageSize={5} category="technology" key="technology" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
