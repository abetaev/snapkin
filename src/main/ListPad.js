import React from "react";

import style from "./ListPad.css";

class Record extends React.Component {
  render() {
    return (
      <div className="recordContainer">
        <div className="leftButton">
          <button>🗑</button>
        </div>
        <div className="mainContent">{this.props.record}</div>
        <div className="rightButton">
          <button />
        </div>
      </div>
    );
  }
}

export default class ListPad extends React.Component {
  render() {
    return this.props.records.map(element => (
      <Record record={element} key={element} />
    ));
  }
}
