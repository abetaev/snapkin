import React from "react";

import ListPad from "./ListPad.js";
import ControlBar from "./ControlBar.js";

import "purecss";

export default class App extends React.Component {
  render() {
    return (
      <div id="layout" className="pure-g">
        <div className="pure-u-1 pure-u-md-1-6 pure-u-lg-1-5 pure-u-xl-1-3" />

        <div className="pure-u-1 pure-u-md-2-3 pure-u-lg-3-5 pure-u-xl-1-3 column">
          <div id="contentContainer">
            <div id="content">
              <ListPad records={this.props.data.records} />
              <ControlBar />
            </div>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-5 pure-u-xl-1-3" />
      </div>
    );
  }
}
