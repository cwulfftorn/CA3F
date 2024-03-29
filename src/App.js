import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  useParams,
  Switch,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header/>
      <Content/>
    </Router>
  );
}
const Header = () => {
  return(
    <nav>
   <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
        </ul>
  </nav>
  );
}
const Content = () => {
  return(
    <div>
    
    <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        
      
 
  </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
function Hello() {
  return <h2>Hello</h2>;
}

function Topics() {
  let match = useRouteMatch();
console.log(match);
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <NavLink to={`${match.url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`}>
            Props v. State
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/Hello`}>
         Hello
          </NavLink>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
    <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
        </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return <h3>Requested topic ID: {topicId}</h3>;
}