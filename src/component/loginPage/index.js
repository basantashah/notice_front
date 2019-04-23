import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
            password:'',
            modal:false,
        }
       // this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.showModal = this.showModal.bind(this)
    }
handleChange = (key,value)=> {
    this.setState({
        [key]:value.target.value
    })
}

handleSubmit(event){
    if(this.state.userName!=''&&this.state.password!='')
    {
        
   
        this.login()
    }
    else{
        alert("username or password empty")
    }
    event.preventDefault()
    
}
showModal(){
 this.setState({
     modal:!this.state.modal
 })
  }

login =async() => {
    console.log("login called")
    try{
        console.log("login called inside try")
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
          console.log("login called inside try getting response",response)
          let res = await response.json();
          if(res.status){
            console.log('result',res)
            this.props.callGetToken(res.account.token)
            const cookies = new Cookies();
            cookies.set('loggedIn',true,{path:'/'})
            cookies.set('token',res.account.token,{path:'/'})
            this.props.history.push('/home')
          }
          else{
            this.setState({
                modal:!this.state.modal
            })
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
    <Modal isOpen={this.state.modal} toggle={this.showModal} >
          <ModalHeader toggle={this.showModal}>Login Error</ModalHeader>
          <ModalBody>
            Username or password does not match
          </ModalBody>
          <ModalFooter>
           
            <Button color="secondary" onClick={this.showModal}>cancel</Button>
          </ModalFooter>
        </Modal>
    
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




