import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Biography from './components/Biography';
import './globalstyle.css';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/biography" component={Biography} />
      </Switch>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
