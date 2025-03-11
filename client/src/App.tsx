import { Switch, Route } from "wouter";
import LandingPage from "./pages/landing";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
