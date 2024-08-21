import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
    <>
    <NavBar/>
    <News pageSize={9}/>
    </>
  );
}

export default App;
