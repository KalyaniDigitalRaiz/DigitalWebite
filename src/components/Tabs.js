import React from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab,  } from "react-bootstrap";

import "./Portfolio.css";

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home" />
        <Tab eventKey="profile" title="Profile" />
        <Tab eventKey="contact" title="Contact" />
      </Tabs>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
