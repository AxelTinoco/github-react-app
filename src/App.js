
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
//Context
import { DarkModeContextProvider } from "./context/DarkModeContext";

//Views
import Home from "./Pages/Home/Home";
import Followers from "./Pages/Followers/Followers";

//Layout
import MainLayout from "./Layouts/MainLayout";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        <DarkModeContextProvider>
        <MainLayout>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/followers/:user" exact>
            <Followers />
          </Route>
        </MainLayout>
        </DarkModeContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
