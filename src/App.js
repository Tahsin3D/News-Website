import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
    <>
    <NavBar/>
    <News pageSize={3} />
    </>
  );
}

export default App;
