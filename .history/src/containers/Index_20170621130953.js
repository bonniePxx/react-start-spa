import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FetchOrgList } from '../actions'
import Tooltip from '../components/common/toast';

import style from '../styles/app/demo.scss'

class Index extends React.Component {
   componentDidMount(){
    const { dispatch } = this.props
    dispatch(FetchOrgList())
  }
  render() {
    return (
      <div>
        <div className="pos_relative">
        组件：
        <button onClick={() => Tooltip.show('the tooltip autoHide after 2s')}>正常弹出层</button>
        </div>
        <Router>
          <Route path="/" component={Home} />
        </Router>
        <div id="nprogress" style={{display:this.props.loading?'block':'none'}}>   
           this.props.loading ? "加载中" : ""
        </div>
      </div>
    );
  }
}
const Home = () =>
  <div>
    <h2>得到mock数据form port3000</h2>
  </div>;

const mapStateToProps = (state) => {
    const loading = state.app.loading
    return {
      loading:loading
    }
} 
export default connect()(Index);
