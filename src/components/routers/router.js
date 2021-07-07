import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function router() {
  return (
    <BrowserRouter>
      <Router>
        <Navigation />

        <Route path="/" exact component={NoteList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </BrowserRouter>
  );
}
