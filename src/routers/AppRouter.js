import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Orders from "../components/Orders";
import OrderList from "../components/OrdersList";
import Orderlines from "../components/Orderlines";
import Invoices from "../components/Invoices";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import AddOrder from "../components/AddOrder";
import EditOrder from "../components/EditOrder";
import {database} from '../firebase/firebase'


let AppRouter = () => (
  <BrowserRouter>
    <div className="main_padding">
      <img
        className="main_image"
        src="https://www.axis.com/sites/all/themes/axis_bootstrap_subtheme/images/axis_logo.png"
      />
      <Header />
      <Switch>
        <Route path="/orders" component={Orders} />
        <Route path="/" component={Orders} />
         <Route path="/edit/:id" component={EditOrder} /> 
        <Route path="/orderlines" component={Orderlines} />
        <Route path="/invoices" component={Invoices} />
        <Route path="/addorder" component={AddOrder} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;
