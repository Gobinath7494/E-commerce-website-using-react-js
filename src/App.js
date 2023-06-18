import React, { useState, useContext, lazy, Suspense } from "react";
import Cartitem from "./cart/cartitem";
import Cartcontaxt from "./store/context";
import { Route, Switch, Redirect } from "react-router-dom";
//import Store from "./Component/Store";
//import About from "./Component/About";
import Layout from "./Layout/Layout";
import Login from "./Component/Login";
//import Homepage from "./Component/Homepage";

const About = lazy(() => import("./Component/About"));
const Store = lazy(() => import("./Component/Store"));
const Homepage = lazy(() => import("./Component/Homepage"));

const App = () => {
  const [istrue, setistrue] = useState(false);
  const autoctx = useContext(Cartcontaxt);

  const cartvisible = () => {
    setistrue(true);
  };

  const cartclosehandler = () => {
    setistrue(false);
  };
  return (
    <Layout onClick={cartvisible}>
      <Switch>
        <Route path="/store" exact>
          {istrue && (
            <Cartitem close={cartclosehandler} show={istrue}></Cartitem>
          )}
          {autoctx.loggedin && (
            <Suspense>
              <Store></Store>
            </Suspense>
          )}
          {!autoctx.loggedin && <Redirect to="./auth"></Redirect>}
        </Route>
        <Route path="/home">
          {autoctx.loggedin && (
            <Suspense>
              <Homepage></Homepage>
            </Suspense>
          )}
          {!autoctx.loggedin && <Redirect to="./auth"></Redirect>}
        </Route>
        <Route path="/about">
          {autoctx.loggedin && (
            <Suspense fallback={<p>looding...</p>}>
              <About></About>
            </Suspense>
          )}
          {!autoctx.loggedin && <Redirect to="./auth"></Redirect>}
        </Route>
        <Route path="/auth">
          <Login></Login>
        </Route>
        <Route path="*">
          <Redirect to="/auth"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
