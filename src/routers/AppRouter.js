import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Orders from "../components/Orders";
import Orderlines from "../components/Orderlines";
import Invoices from "../components/Invoices";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import AddOrder from "../components/AddOrder";
import EditOrder from "../components/EditOrder";
import VeckansKaka from "../components/VeckansKaka";
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
         <Route path="/edit/:id" component={EditOrder} /> 
        <Route path="/orderlines" component={Orderlines} />
        <Route path="/invoices" component={Invoices} />
        <Route path="/addorder" component={AddOrder} />
        <Route component={NotFound} />
      </Switch>
     <input id="input" placeholder="message"/>
     <button onClick={sendMessage}>send</button>
     < VeckansKaka />
     HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEj
    </div>
  </BrowserRouter>
);

let sendMessage = (e) =>{
  var currentdate = new Date();
  e.preventDefault();
  let value = document.querySelector('#input').value
  console.log(value);
  database.ref('messages' + currentdate).set({
    message: value
  });
  document.querySelector('#input').value = ''
}

export default AppRouter;
