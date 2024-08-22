import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import News from './components/News';
import { Route, Routes , BrowserRouter} from 'react-router-dom';

function App() {
  const pageSize = 9;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<News key="general"pageSize={pageSize} category="general" />} />
          <Route path="/about" element={<About category="about"/>} />
          <Route path="/business" element={<News key="business"pageSize={pageSize} category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment"pageSize={pageSize} category="entertainment" />} />
          <Route path="/health" element={<News key="health"pageSize={pageSize} category="health" />} />
          <Route path="/science" element={<News key="science"pageSize={pageSize} category="science" />} />
          <Route path="/sports" element={<News key="sports"pageSize={pageSize} category="sports" />} />
          <Route path="/technology" element={<News key="technology"pageSize={pageSize} category="technology" />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
