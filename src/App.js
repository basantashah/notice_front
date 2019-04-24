import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import LoginPage from './component/loginPage'
import HomePage from './component/loggedin/Home'
import postNotice from './component/postNotice'
import browseNotice from './component/browseNotice'
import noticeBoardOption from './component/postNotice/noticeboardOption'
import yourNotice from './component/yourNotice'
import {PrivateRoutes} from './component/routes'
import {LoggedChecker} from './component/routes/logged'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux"
import notFound from './component/404/404'
class App extends Component {
  render() {
    return (
     <div>
       <Switch>
       <LoggedChecker exact path="/" component={LoginPage}/>
       {/* <PrivateRoutes exact path="/home" component={HomePage}  /> */}
       <PrivateRoutes exact path="/mynotice" component={yourNotice}  />
       <PrivateRoutes exact path="/notice" component={postNotice} />
       <PrivateRoutes exact path="/noticeboard" component={browseNotice} />
       <PrivateRoutes exact path="/noticeoption" component={noticeBoardOption} />
       <Route   component ={notFound} />
       </Switch>
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
