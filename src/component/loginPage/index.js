import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import {getToken} from './action'
import config from '../../config/config'
import './styles.css'
import image from "../../assets/islington.png"




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
        const cookies = new Cookies();
        cookies.set('loggedIn',true,{path:'/'})
        cookies.set('token','tokenvalue',{path:'/'})
        this.props.history.push('/home')

        //this.login()
    }
    else{
    alert('Username and password cannot be empty' );
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

            this.props.callGetToken('token value pass here')
            const cookies = new Cookies();
            cookies.set('loggedIn',true,{path:'/'})
            cookies.set('token','tokenvalue',{path:'/'})
            this.props.history.push('/home')
          }
          else{
            alert('Username and password cannot be empty' );
          }
    }
    catch(e){

    }
}

  render() {
    return (


<div class="login-form">

    <form  onSubmit={this.handleSubmit}>
        
        <img src={image} class="center" alt="islington"/>      
        <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required="required"  onChange={(text)=>{this.handleChange('userName',text)}}/>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required"  onChange={(text)=>{this.handleChange('password',text)}} />
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" onClick = {this.handleSubmit}>Log in</button>
        </div> 
        {console.log(this.props.token)}
    </form>
    
</div>

    );
  }
}

const mapStateToProps = state => {
    return{
      token : state.Token
    
    }
  }
  
  
  const mapDispatchToProps = dispatch =>{
  return{
      callGetToken:(value)=>{
          dispatch(getToken(value))
      }
  }
  }

  const login = connect(mapStateToProps,mapDispatchToProps)(LoginPage)
export default withRouter(login) ;




