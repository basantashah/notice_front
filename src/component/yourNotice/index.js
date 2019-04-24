import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Select from 'react-select';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavBar from '../navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import moment from "moment";
import config from '../../config/config'


const noticeType = [
  {
    label: "Notice",value:'notice'
  },
  {
    label: "Application",value:'application'
  },
  {
    label: "Schedule",value:'schedule'
  },
];

const Urgent = [
  {
    label: "True",value:true
  },
  {
    label: "False",value:false
  },
]

const department = [
  {
    label: "RTE",value:"RTE"
  },
  {
    label: "Finance",value:"Finance"
  },
  {
    label: "Student Department",value:"Student Department"
  },
  {
    label: "ACADEMIC",value:"ACADEMIC"
  },
  {
    label: "IT",value:"IT"
  },
  {
    label: "Other",value:"Other"
  },
]

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
            data:[
             
          
            ],
            modal:false,
            modalItem:'',
            editableModal:false,

            title:null,
            subject:null,
            urgent:null,
            status:null,
            department:null,
            content:null
        }
       // this.handleChange = this.handleChange.bind(this)
       this.showModal = this.showModal.bind(this)
       this.updateData = this.updateData.bind(this)
       this.deleteData = this.deleteData.bind(this)
    }
handleChange = (key,value)=> {
    console.log(key,value)
    this.setState({
        [key]:value.target.value
    })
}
showModal(item){
    console.log("modal test",item)
    
    if(this.state.modal){
         this.setState({
            modalItem:'',
            modal:false,
            editableModal:false
        })
    }
    else{
         this.setState({
            modalItem:item,
            title:item.title,
            subject:item.subject,
            urgent:item.urgent,
            status:item.status,
            department:item.department,
            content:item.content,
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
handleText = (key,value) => {
  this.setState({
    [key]:value.target.value
  })

}

handleStatus=(e)=> {
  this.setState({
    status:e
  })
}
handleUrgent = (e) => {
  this.setState({
    urgent:e
  })
}
handleDepartment = (selectedOption) => {
  console.log('notice type',selectedOption)
  this.setState({
    department:selectedOption.value
  })
}

deleteData = async()=> {
  const cookies = new Cookies();
  const token = cookies.get('token')
  try{
    console.log("submitting put req")
    console.log(this.state.modalItem.id)
    const response = await fetch(config.deleteNotice, {
        method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token
        },
          body: JSON.stringify({
            id: this.state.modalItem.id, 
        })
      });
      
      let res = await response.json();
      console.log('responseeeeee',res)
      if(res.status){
        this.setState({
          modal:!this.state.modal
        })
      }
     
}
catch(e){

} 
}

updateData = async() => {
  const cookies = new Cookies();
  const token = cookies.get('token')
  try{
    
    const response = await fetch(config.updateNotice, {
        method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token
        },
          body: JSON.stringify({
            CreatedAt: this.state.modalItem.CreatedAt,
            DeletedAt: this.state.modalItem.DeletedAt,
            UpdatedAt: this.state.modalItem.UpdatedAt,
            content: this.state.content,
            department: this.state.department,
            expiry: this.state.modalItem.expiry,
            id: this.state.modalItem.id,
            status: this.state.status,
            subject:this.state.subject,
            title: this.state.title,
            urgent: this.state.urgent,
            user_id: this.state.modalItem.user_id
           
           
           
        })
      });
      
      let res = await response.json();
      console.log('responseeeeee',res)
      if(res.status){
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
      <div class="backGround">
        <NavBar />
        {this.state.showImportant && 
<div>
<text style={{fontSize:20,marginLeft:10,marginTop:40,marginBottom:20,fontWeight:'bold'}}>Important</text>
  </div>

}
      <div class="row" >
      {this.state.data &&
this.state.data.map((item,index)=>{
  if(item.urgent===true)
  return(

    <div  key={index}>
   <div class="card-wrapper">
<div class="card" style={{backgroundColor:'red'}}  >
  <div class="container-fluid" onClick={()=>this.showModal(item)} >
  
  <div  class="text-center">
  
  <h6 style={{fontSize:'90%',color:'#fff',fontWeight:'bold'}}>{item.title}</h6>
  </div>
  <div class ="card-time">
  <h6 class="card-subtitle  float-right" style={{fontSize:'90%'}}>Date : {moment(item.CreatedAt).format("MMMM Do YYYY")}</h6>
  </div>
  <div  class="text-center">
  <p class="card-title" style={{color:'#fff',textAlign:'center',fontSize:'90%'}}>{item.subject}</p>
  </div>
  
  <p class="card-text" style={{fontSize:'90%'}}> {item.content}</p>
  <div  class="text-center">
  <h6 class="card-subtitle " style={{fontSize:'90%'}}> {item.department}</h6>
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

    <div  >
   <div class="card-wrapper">
<div class="card" style={{backgroundColor:'#fff'}} >
  <div class="container-fluid" onClick={()=>this.showModal(item)}>
  <div  class="text-center">
  
  <h6 style={{fontSize:'90%',color:'#000',fontWeight:'bold'}}>{item.title}</h6>
  </div>
  <div class ="card-time">
  
  <h6 class="card-subtitle  float-right" style={{color:'#000',fontSize:'90%'}}>Date : {moment(item.expiry).format("MMMM Do YYYY")}</h6>
  </div>
  <div  class="text-center">
  <p class="card-title" style={{color:'#000',fontSize:'90%'}}>{item.subject}</p>
  </div>
  
  <p class="card-text" style={{color:'#000',fontSize:'90%'}}> {item.content}</p>
  <div  class="text-center">
  <h6 class="card-subtitle " style={{color:'#000',fontSize:'90%'}}> {item.department}</h6>
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
          <ModalHeader toggle={this.showModal} >
          {this.state.editableModal?
          <div>
          <h4>Title</h4>
          <input type="text" class="form-control" placeholder="Title" required="required" value={this.state.title} onChange={(text)=>this.handleText('title',text)} maxLength="10"/>
         
          </div>
          :
          <div>
            <label style={{fontSize:16, marginRight:30}}>Title :</label>
          {this.state.title}
          </div>
          }
          </ModalHeader>
          <ModalBody>
         {
           this.state.editableModal ?
           <div>
             <div>
             <h5>Subject</h5>
             <input type="text" class="form-control" placeholder="subject" required="required" value={this.state.subject} onChange={(text)=>this.handleText('subject',text)} maxLength="30"/>
             </div>
             <div>
             <h5>Urgent</h5>
             <input type="checkbox" onChange={()=>this.handleUrgent(true)} checked={this.state.urgent}/> True <input type="checkbox" onChange={()=>this.handleUrgent(false)} checked={!this.state.urgent} /> false 
             </div>
             <div>
             <h5>Status</h5>
             <input type="checkbox" onChange={()=>this.handleStatus(true)} checked={this.state.status}/> True <input type="checkbox" onChange={()=>this.handleStatus(false)} checked={!this.state.status} /> False 
             </div>
             <div>
             <h5>Department</h5>
             <Select options={ department }  onChange={this.handleDepartment}  />
             </div>
             <div>
             <h5>Message</h5>
       <textarea class="form-control rounded-0"  rows="6" value={this.state.content} onChange={(text)=>this.handleText('content',text)} maxLength="90"/>
       </div>
           </div>
           :
           <div>
<div>
<label style={{fontSize:16, marginRight:30}}>Subject : </label>
  {this.state.modalItem.subject}
</div>
<div>
<label style={{fontSize:16, marginRight:30}}>Urgent : </label>
  {this.state.modalItem.urgent?"True":"False"}
  </div>
  <div>
  <label style={{fontSize:16, marginRight:30}}>Status : </label>
    {this.state.modalItem.status? "True":"False"}
  </div>
  <div>
  <label style={{fontSize:16, marginRight:30}}>Department : </label>
    {this.state.modalItem.department}
  </div>
  <div>
  <label style={{fontSize:16, marginRight:30}}>Message : </label>
    {this.state.modalItem.content}
  </div>
           </div>
         }

            
          </ModalBody>
          <ModalFooter>
            {this.state.editableModal?
            <div>
  <Button color="primary" onClick={()=>this.setState({editableModal:false})}>cancel</Button>{' '}
  <Button color="danger" onClick={this.updateData}>update</Button>
  </div>
            :
            <div>
            <Button color="primary" onClick={()=>this.setState({editableModal:true})}>Edit</Button>{' '}
            <Button color="danger" onClick={this.deleteData}>Delete</Button>
            </div>
            }
            </ModalFooter>
        </Modal>
      </div>
      
    );
  }
}

export default LoginPage;
