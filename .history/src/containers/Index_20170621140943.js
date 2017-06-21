import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FetchOrgList } from "../actions";
import Tooltip from "../components/common/toast";
import CSSModules from "react-css-modules";
import styles from "../styles/app/demo.scss";

const Index = () =>
  <div>
    <div>
      <h2>图片处理</h2>
      <div className="pic"/>
      <img styleName='little'/>
    </div>
  </div>;

export default CSSModules(Index, styles);
