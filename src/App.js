import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import LoginPage from './component/loginPage'
import HomePage from './component/loggedin/Home'
import postNotice from './component/postNotice'
import browseNotice from './component/browseNotice'
import noticeBoardOption from './component/postNotice/noticeboardOption'
import {PrivateRoutes} from './component/routes'
import {LoggedChecker} from './component/routes/logged'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux"
class App extends Component {
  render() {
    return (
     <div>
       <LoggedChecker exact path="/" component={LoginPage}/>
       <PrivateRoutes exact path="/home" component={HomePage}  />
       <PrivateRoutes exact path="/notice" component={postNotice} />
       <PrivateRoutes exact path="/noticeboard" component={browseNotice} />
       <PrivateRoutes exact path="/noticeoption" component={noticeBoardOption} />
     </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    token : state.Token
  
  }
}

const rootApp = connect(mapStateToProps,null)(App)
export default rootApp;
