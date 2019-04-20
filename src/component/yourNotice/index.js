import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavBar from '../navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import moment from "moment";
import config from '../../config/config'
class LoginPage extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            password:'',
            urgent:[],
            normal:[],
            showImportant:false,
            showNormal:false,
            data:[],
            modal:false,
            modalTitle:"",
            modalContent:""
            
        }
       // this.handleChange = this.handleChange.bind(this)
       this.showModal = this.showModal.bind(this)
    }
handleChange = (key,value)=> {
    console.log(key,value)
    this.setState({
        [key]:value.target.value
    })
}
showModal(title,content){
    console.log("modal test",title)
    
    if(this.state.modal){
         this.setState({
            modalTitle:null,
            modalContent:null,
            modal:false
        })
    }
    else{
         this.setState({
            modalTitle:title,
            modalContent:content,
            modal:true
        })
    }
  }

checkData = async() => {
this.state.data.map((item,index)=>{
  if(item.urgent==true){
    this.setState({
      showImportant:true
    })
    return
  }
  if(item.urgent==false)
  {
    this.setState({
      showNormal:true
    })
  }
})
}

componentDidMount = async()=> {
  const cookies = new Cookies();
  const token = cookies.get('token')
  try{
    const res = await fetch(config.yourNotice,{
      method:"GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
    })
  
    let response = await res.json();
    console.log('res',response)
    if(response.status==true)
    {
     await this.setState({
        data:response.data
      })
      this.checkData()
    }
    else{
   
    }
  }
  catch(e){
    console.log(e)
  }
}


  render() {
    
    return (
      <div>
        <NavBar />
        {this.state.showImportant && 
<div>
<text style={{fontSize:20,marginLeft:10,marginTop:40,marginBottom:20,fontWeight:'bold'}}>Important</text>
  </div>

}
      <div class="row">
      {this.state.data &&
this.state.data.map((item,index)=>{
  if(item.urgent===true)
  return(

    <div class="col-sm-4 auto" key={index}>
   <div class="card-wrapper">
<div class="card" style={{backgroundColor:'red'}}  >
  <div class="container-fluid" onClick={()=>this.showModal(item.title,item.content)}>
  
  <div  class="text-center">
  
  <h6 style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>{item.title}</h6>
  </div>
  <div class ="card-time">
  <h6 class="card-subtitle  float-right">Date : {moment(item.CreatedAt).format("MMMM Do YYYY")}</h6>
  </div>
  <div  class="text-center">
  <p class="card-title" style={{color:'#fff',textAlign:'center'}}>{item.subject}</p>
  </div>
  
  <p class="card-text"> {item.content}</p>
  <div  class="text-center">
  <h6 class="card-subtitle "> {item.department}</h6>
  </div>
  </div>
  </div>
</div>
</div>



  )
})
}
</div>
{this.state.showNormal && 
<div>
  <text style={{fontSize:20,marginLeft:10,marginTop:40,marginBottom:20,fontWeight:'bold'}}>OTHER</text>
  </div>

}
<div class="row">
{this.state.data &&
this.state.data.map((item,index)=>{
  if(item.urgent===false)
  return(

    <div class="col-sm-4 auto" >
   <div class="card-wrapper">
<div class="card" style={{backgroundColor:'#fff'}} >
  <div class="container-fluid" onClick={()=>this.showModal(item.title,item.content)}>
  <div  class="text-center">
  
  <h6 style={{fontSize:18,color:'#000',fontWeight:'bold'}}>{item.title}</h6>
  </div>
  <div class ="card-time">
  
  <h6 class="card-subtitle  float-right" style={{color:'#000'}}>Date : {moment(item.CreatedAt).format("MMMM Do YYYY")}</h6>
  </div>
  <div  class="text-center">
  <p class="card-title" style={{color:'#000'}}>{item.subject}</p>
  </div>
  
  <p class="card-text" style={{color:'#000'}}> {item.content}</p>
  <div  class="text-center">
  <h6 class="card-subtitle " style={{color:'#000'}}> {item.department}</h6>
  </div>
  </div>
</div>
</div>
</div>


  )
})
}
      </div>
    
      <Modal isOpen={this.state.modal} toggle={this.showModal} >
          <ModalHeader toggle={this.showModal}>{this.state.modalTitle}</ModalHeader>
          <ModalBody>
            {this.state.modalContent}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.showModal}>Edit</Button>{' '}
            <Button color="danger" onClick={this.showModal}>Delete</Button>
          </ModalFooter>
        </Modal>
      </div>
      
    );
  }
}

export default LoginPage;
