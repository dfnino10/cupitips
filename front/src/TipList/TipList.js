import React, { Component } from "react";

import "./TipList.css";
import TipInList from "./TipInList/TipInList.js";

class TipList extends Component {
  renderCols(cols, renderElems) {
    let valClass = "col-sm-" + 12 / cols.length +  " text-center";
    let columns = [];
    for (let i = 0; i < cols.length; i++) {
      columns.push(
        <div className={valClass} key={"col" + i}>
          {renderElems(cols[i])}
        </div>
      );
    }
    return columns;
  }

  renderElems(col) {
    return col.map(elem => (
      <TipInList key={"TipInList" + elem._id} tip={elem}></TipInList>
    ));
  }

  render() {
    let width = window.screen.width;
    let n = 1;
    if (width >= 768) {
      n++;
    }
    if (width >= 1200) {
      n++;
    }
    let cols = [];
    for (let i = 0; i < n; i++) {
      cols.push([]);
    }
    for (let i = 0; i < this.props.tips.length; i++) {
      cols[i % n].push(this.props.tips[i]);
    }
    return (
      <div className="container-fluid" id="tipList">
        <div className="row">{this.renderCols(cols, this.renderElems)}</div>
      </div>
    );
  }
}

export default TipList;
