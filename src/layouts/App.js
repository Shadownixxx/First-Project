import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header.js";
import Page from "./Page.js";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
