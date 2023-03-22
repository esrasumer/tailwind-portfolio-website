import './app.css';
// import Button from './components/Button';
import {
  Link, Route, Router, Routes,
} from "react-router-dom";
// import ButtonPages from './components/ButtonPages';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import Button from './components/Button'

// import User from './User';

// const isLoading = false;
// const name = 'Esra';

function App() {
  return (
    <div>
      <Route>
        <Link to='/' component={Home} />
        <Link to='/users' component={Users} />
        <Link to='/about' component={About} />
        <Link to='/button' component={Button} />
      </Route>
      {/* <User name='Esra Sümer' age={22} city={'Gaziantep'} />
      <User name='Çinar Sümer' age={50} city={'İstanbul'} />
      <User name='Ali Sümer' age={40} city={'Sakarya'} /> */}

      {/* {isLoading ?
        <div>{name}</div>é
        : 'birşey yok'} */}

    </div>
  );
}

export default App;