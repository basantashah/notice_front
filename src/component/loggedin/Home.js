import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import './index.css'
const Wrapper = {
display:'flex',
  flexItems:3,
  'flex-direction':'column',
  width:'500px',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center'
}

class Home extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            password:''
        }
       // this.handleChange = this.handleChange.bind(this)
    }
handleChange = (key,value)=> {
    console.log(key,value)
    this.setState({
        [key]:value.target.value
    })
}

postNotice = () => {
    this.props.history.push('/noticeoption')
}
browseNotice = () => {
    this.props.history.push('/noticeboard')
}

  render() {
    return (
      
     <div class="wrapper">

    <div class="jumbotron" onClick = {this.postNotice}>
    
    <h1  class="text-center" >Post new notice</h1>
    </div>
    
    <div class="jumbotron"  onClick = {this.browseNotice}>
    
    <h1 class="text-center" >Browse notice</h1>
    </div>
     </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    token : state.Token
  }
}

const homePage = connect(mapStateToProps,null)(Home)
export default homePage;
