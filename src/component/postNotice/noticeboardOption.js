import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const wrapper = {
  display:'flex',
  'flex-direction':'column',
  
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
    this.props.history.push('/notice')
}
browseNotice = () => {
    this.props.history.push('/noticeboard')
}

  render() {
    return (
     <div style={wrapper}>
          <Button variant="contained" color="primary" onClick = {this.postNotice}>
      Post new Notice 
    </Button>
    <Button variant="contained" color="primary" onClick = {this.browseNotice}>
      update notice
    </Button>
    <Button variant="contained" color="primary" onClick = {this.browseNotice}>
      delete  notice
    </Button>
     </div>
    );
  }
}

export default LoginPage;
