import Newsapi from './components/Newsapi.js'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar /> 
      <Route exact path="/"> <Newsapi category="business"></Newsapi> </Route>
      <Route exact path="/Business"> <Newsapi category="business"></Newsapi> </Route>
      <Route exact path="/entertainment"> <Newsapi category="entertainment"></Newsapi> </Route>
      <Route exact path="/general"> <Newsapi category="general"></Newsapi> </Route>
      <Route exact path="/health"> <Newsapi category="health"></Newsapi> </Route>
      <Route exact path="/science"> <Newsapi category="science"></Newsapi> </Route>
      <Route exact path="/sports"> <Newsapi category="sports"></Newsapi> </Route>
      <Route exact path="/technology"> <Newsapi category="technology"></Newsapi> </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
