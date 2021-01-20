import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CreateItem from "./pages/CreateItem";
import EditItem from "./pages/EditItem";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-100 w-full h-full p-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/editMenuItem/:id" exact component={EditItem} />
          <Route path="/createMenuItem" exact component={CreateItem} />
        </Switch>
        <ToastContainer autoClose={3000} />
      </div>
    </Router>
  );
}
