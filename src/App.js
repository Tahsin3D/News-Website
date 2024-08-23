import './App.css';
import About from './components/About';
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

class App extends React.Component {
   constructor(props)
   {
    super(props);
    this.state = {
      progress : 0,
      pageSize: 12
    }
   }
   updateProgress = (prog) => {
    this.setState({progress: prog})
   }
   render(){
   
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}/>

        <Routes>
          <Route path="/" element={<News updateProgress={this.updateProgress} key="general"pageSize={this.state.pageSize} category="general" />} />
          <Route path="/about" element={<About category="about"/>} />
          <Route path="/business" element={<News updateProgress={this.updateProgress} key="business"pageSize={this.state.pageSize} category="business" />} />
          <Route path="/entertainment" element={<News updateProgress={this.updateProgress} key="entertainment"pageSize={this.state.pageSize} category="entertainment" />} />
          <Route path="/health" element={<News updateProgress={this.updateProgress} key="health"pageSize={this.state.pageSize} category="health" />} />
          <Route path="/science" element={<News updateProgress={this.updateProgress} key="science"pageSize={this.state.pageSize} category="science" />} />
          <Route path="/sports" element={<News updateProgress={this.updateProgress} key="sports"pageSize={this.state.pageSize} category="sports" />} />
          <Route path="/technology" element={<News updateProgress={this.updateProgress} key="technology"pageSize={this.state.pageSize} category="technology" />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
   }}

export default App;
