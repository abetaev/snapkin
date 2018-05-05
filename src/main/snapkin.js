import ReactDOM from "react-dom";
import React from "react";

import "purecss";

import App from "./App.js";

const initialData = {
    records: [
      "the very-very first record.",
      "the most second record!",
      "it looks like a pretty good place to leave short notes",
      "good tools aren't always easy to determine",
      "this is a very strange experiment"
    ]
  };
  
const app = <App name="App" data={initialData} />;

ReactDOM.render(app, document.getElementById("App"));
