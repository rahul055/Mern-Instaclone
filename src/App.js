import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as PathTo from "./constants/Router";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Notfound = lazy(() => import("./pages/Not-found"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path={PathTo.LOGIN} component={Login} />
          <Route path={PathTo.SIGN_UP} component={Signup} />
          <Route exact path={PathTo.DASHBOARD} component={Dashboard} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
