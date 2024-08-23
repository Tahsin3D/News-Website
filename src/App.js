import "./App.css";
import About from "./components/About";
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const pageSize = 5;

  const toggleMode = () => {
    if(mode==="light")
    {
      setMode("dark");
    }
    else if (mode==="dark")
    {
      setMode("light")
    }
  }
  document.body.style.backgroundColor = mode==="dark"?"#000000":"white"
  document.body.style.color = mode==="dark"?"white":"black"
  return (
    <BrowserRouter>
      <NavBar toggleMode={toggleMode} mode={mode}/>

      <LoadingBar height={3} color="#f11946" progress={progress} />

      <Routes>
        <Route
          path="/"
          element={
            <News mode={mode}
              updateProgress={setProgress}
              key="general"
              pageSize={pageSize}
              category="general"
            />
          }
        />
        <Route path="/about" element={<About mode={mode}category="about" />} />
        <Route
          path="/business"
          element={
            <News mode={mode}
              updateProgress={setProgress}
              key="business"
              pageSize={pageSize}
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News mode={mode}
              updateProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              category="entertainment"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News mode={mode}
              updateProgress={setProgress}
              key="health"
              pageSize={pageSize}
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News mode={mode}
              updateProgress={setProgress}
              key="science"
              pageSize={pageSize}
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News mode={mode}
              updateProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News mode={mode}
              updateProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              category="technology"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
