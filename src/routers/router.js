import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Listing from "../components/listing";
import CheckOut from "../components/checkout";
import NotFound from "../components/errorhandlers/notfound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="content-panel">
          <Switch>
            <Route path="/" component={Listing} exact={true} />
            <Route path="/checkout" component={CheckOut} exact={true} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
