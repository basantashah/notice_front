import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import config from '../../config/config'
import './styles.css'





class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:''
        }
       // this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
    }
handleChange = (key,value)=> {
    this.setState({
        [key]:value.target.value
    })
}

handleSubmit(event){
    if(this.state.userName!=''&&this.state.password!='')
    {
        this.props.history.push('/home')
     //this should be the original
        //this.login()
    }
    else{
    alert('The value is: ' );
    }
    event.preventDefault()
}

login =async() => {
    try{
        const response = await fetch(config.login, {
            method: "POST",
            headers: {
              'Accept': "application/json",
              "Content-Type": "application/json"
            },
              body: JSON.stringify({
               email:this.state.userName,
               password:this.state.password
            })
          });
          let res = await response.json();
          if(res.status){

    //get user token and store in redux
    // res.account.token
    //after storing the token send to home
    this.props.history.push('/home')
          }
          else{
           //username or password not correct
          }
    }
    catch(e){

    }
}

  render() {
    return (


<div class="login-form">

    <form  onSubmit={this.handleSubmit}>
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required="required"  onChange={(text)=>{this.handleChange('userName',text)}}/>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required"  onChange={(text)=>{this.handleChange('password',text)}} />
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" onClick = {this.handleSubmit}>Log in</button>
        </div>
           
    </form>
    
</div>

    );
  }
}

export default withRouter(LoginPage) ;




{/* <form onSubmit={this.handleSubmit}>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" value={this.state.userName} onChange={(text)=>{this.handleChange('userName',text)}}/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" value={this.state.password} onChange={(text)=>{this.handleChange('password',text)}} />
  </div>

  <Button variant="contained" color="primary" onClick = {this.handleSubmit}>
      submit
    </Button>
</form> */}