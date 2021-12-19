import * as React from "react";
import { BrowserRouter,/* Router,*/ Switch, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
//import history from './app/services/History'
import sessionRoutes from "./app/components/views/sessions/sessionsRoutes";
import Dashboard from "./app/components/views/layouts/Dashboard";
import Index from "./app/components/views/index/Index"
import coolerTheme from "./app/themes/coolerTheme";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => (
    <ThemeProvider theme={coolerTheme}>
      <GlobalStyles/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HashRouter>
        <Switch>
        <Route exact path="/" component={Index} />
        {/*AuthGuard.isAuthenticated() ? <Redirect to="/home"/> :*/ sessionRoutes.map((item) => (
            <Route path={item.path} key={item} component={item.component} />
          )) }
          {/*AuthGuard.isAuthenticated() ?  <Dashboard /> : <Redirect to="/session/signin"/>*/}
          <Dashboard /> 
        </Switch>
      </HashRouter>
      </BrowserRouter>
    </ThemeProvider>
  );

