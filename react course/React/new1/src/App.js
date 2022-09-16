import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { UserList } from "./features/users/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <UserList />
          </Route>
          <Route path="/add-user">
            <h1>Add user</h1>
          </Route>
          <Route path="/edit-user">
            <h1>Edit user</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}