import React from 'react';
import { connect } from 'react-redux'

class Index extends React.Component {
  render(){
    return(
      <div className="application-view">
          <Router history={this.props.history}>
            <Route path="/">
              <IndexRoute component={IndexView}/>
            </Route>
          </Router>
        </div>
    )    
  }
}

export default connect()(Index);

