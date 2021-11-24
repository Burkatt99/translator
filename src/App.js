import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import FindWords from "./pages/Translator";
import Download from './pages/Download';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/translator/" element={<Download/>}/>
            <Route path="/search" element={<FindWords/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
