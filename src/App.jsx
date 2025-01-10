import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import "./globals_op.css"; // Import Tailwind CSS
import "./App.css"; // Import Tailwind CSS



const App = () => {
  return (
    <div className="flex justify-center">
      <Router>
        <div className='flex flex-col w-full'>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact-us" component={ContactUs} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
