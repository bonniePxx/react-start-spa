import React from 'react';
import { connect } from 'react-redux'
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom'


class Index extends React.Component {
  render(){
    return(
    <div>
     <HashRouter>
      <Route path='/' component={Index}/>
     </HashRouter>
     </div>
    )    
  }
}

export default connect()(Index);

