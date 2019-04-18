import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


const Wrapper = {
display:'flex',
  flexItems:3,
  'flex-direction':'column'
}

class LoginPage extends Component {
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
     <div style={Wrapper}>
  <Button variant="contained" color="primary" onClick = {this.postNotice}>
      Post new Notice 
    </Button>
    <Button variant="contained" color="primary" onClick = {this.browseNotice}>
      Browse Notice Boards
    </Button>
    
     </div>
    );
  }
}

export default LoginPage;
