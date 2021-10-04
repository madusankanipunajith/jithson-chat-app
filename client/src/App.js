import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components importing
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Join}/>
            <Route path="/chat" component={Chat}/>
        </Switch>
    </Router>
  );
}

export default App;
