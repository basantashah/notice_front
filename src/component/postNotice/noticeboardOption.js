import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../navBar'
import './postNotice.css'
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
        <div className="background-gradient">
     <NavBar/>
 <div class="wrapper">

<button class="btns" onClick = {this.postNotice}>
   
   <h1  class="text-center" > Post new Notice </h1>
   </button>

   <button class="btns" >
   
   <h1  class="text-center" > update  notice</h1>
   </button>
   
   <button class="btns"  >
   
   <h1 class="text-center" > delete  notice</h1>
   </button>
    </div>
</div>

    );
  }
}

export default LoginPage;
