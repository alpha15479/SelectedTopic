/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import AboutMe from "./components/AboutMe";
import Content from "./components/Content";
import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hero" component={Hero} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/content" component={Content} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App;
