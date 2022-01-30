import Navbar from "./components/navbar.component";
import { Route, Switch } from 'react-router-dom';
import SignUp from "./components/sign-up-form.component";
import Login from "./components/login-form.component";

function App() {
  return (
    <div className="App">
     <Navbar />
       <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
       </Switch>
    </div>
  );
}

export default App;
