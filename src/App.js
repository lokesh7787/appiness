import "./App.css";
import LoginForm from "./loginForm";
import UserDetailDisplay from "./userDetailDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/dashBoard" exact component={UserDetailDisplay} />
      </Router>
    </div>
  );
}

export default App;
