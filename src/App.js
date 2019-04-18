import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import LoginPage from './component/loginPage'
import HomePage from './component/loggedin/Home'
import postNotice from './component/postNotice'
import browseNotice from './component/browseNotice'
import noticeBoardOption from './component/postNotice/noticeboardOption'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
     <div>
       <Route exact path="/" component={LoginPage}/>
       <Route exact path="/home" component={HomePage} />
       <Route exact path="/notice" component={postNotice} />
       <Route exact path="/noticeboard" component={browseNotice} />
       <Route exact path="/noticeoption" component={noticeBoardOption} />
     </div>
    );
  }
}

export default App;
