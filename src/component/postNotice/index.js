import React, { Component } from 'react';
import Select from 'react-select';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import Cookies from 'universal-cookie';
import NavBar from '../navBar'
import "react-datepicker/dist/react-datepicker.css";
import './postNotice.css'
import config from '../../config/config'
const wrapper = {
  display:'flex',
  'flex-direction':'row',
  
}


const noticeType = [
  {
    label: "Notice",value:'notice'
  },
  {
    label: "Application",value:'application'
  }
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

class NoticePost extends Component {
    constructor(){
        super();
        this.state={
            showError:false,
            title:"",
            titleError:'Title is required',
            subject:"",
            subjectError:"Subject is required",
            noticeType:"",
            noticeTypeError:'Please select notice type',
            urgent:false,
            startDate:new Date(),
            expiryDate: new Date(),
            message:"",
            messageError:'Message is required',
            department:"",
            departmentError:'Please select department',
            modal:false,
            status:true
        }
       // this.handleChange = this.handleChange.bind(this)
       this.handleStartDate = this.handleStartDate.bind(this)
       this.handleExpiryDate = this.handleExpiryDate.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.showModal = this.showModal.bind(this)
       this.handleUrgent = this.handleUrgent.bind(this)
    }
handleChange = (key,value)=> {
    console.log(key,value)
    this.setState({
        [key]:value.target.value
    })
}

handleStartDate(date) {
  this.setState({
    startDate: date
  });
}

handleExpiryDate(date) {
  this.setState({
    expiryDate: date
  });
}

handleNoticeType = (selectedOption) => {
  console.log('notice type',selectedOption)
  this.setState({
    noticeType:selectedOption.value
  })
}

handleDepartment = (selectedOption) => {
  console.log('notice type',selectedOption)
  this.setState({
    department:selectedOption.value
  })
}
handleSubject = (text)=> {
  this.setState({
    subject:text.target.value
  })
}

handleUrgent = (e) => {
  console.log('urgent',e)
  this.setState({
    urgent:e
  })
}

handleMessage =(e)=> {
  this.setState({
    message:e.target.value
  })
  console.log('message',e.target.value)
}
postNotice = () => {
    this.props.history.push('/notice')
}
browseNotice = () => {
    this.props.history.push('/noticeboard')
}


handletitle = (text)=> {
  this.setState({
    title:text.target.value
  })
}

handleStatus=(e)=> {
  this.setState({
    status:e
  })
}



handleSubmit = (event) => {
if(this.state.title==""||this.state.noticeType==""||this.state.department==""||this.state.message=="")
{
  this.setState({
    showError:true
  })
  return
}
else{
  this.submitForm()
}
event.preventDefault();
}

submitForm = async() => {
  const cookies = new Cookies();
  const token = cookies.get('token')
  try{
    console.log("login called inside try")
    const response = await fetch(config.postNotice, {
        method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token
        },
          body: JSON.stringify({
           title:this.state.title,
           expiry:this.state.expiryDate,
           subject:this.state.subject,
           content:this.state.message,
           department:this.state.department,
           urgent:this.state.urgent,
           status:this.state.status,
           type:this.state.noticeType
        })
      });
      
      let res = await response.json();
      console.log(res)
      if(res.status){
        this.setState({
          modal:!this.state.modal
        })
      }
     
}
catch(e){

}
}
showModal(){
  this.setState({
      modal:!this.state.modal
  })
  this.props.history.push('/noticeboard')
   }
 

  render() {
    return (
      <div class="backGround-post">
        <NavBar />
        <div class="post-notice-wrapper">
     <div class="post-notice">
     <div class="cards">
  <form class="form-notice" onSubmit={this.handleSubmit}>
  <div class="form-group">
    <h4>Title</h4>
    <input type="text" class="form-control" placeholder="Title" required="required" value={this.state.title} onChange={(text)=>{this.handletitle(text)}} maxLength="20"/>
    <text style={{color:'red'}}>{this.state.showError && this.state.title=="" && this.state.titleError}</text>
    
  </div>
  <div class="form-group">
    <h4>Subject</h4>
    <input type="text" class="form-control" placeholder="subject" required="required" value={this.state.subject} onChange={(text)=>{this.handleSubject(text)}} maxLength="30"/>
    <text style={{color:'red'}}>{this.state.showError && this.state.subject=="" && this.state.subjectError}</text>
    
  </div>
  <div class="form-group">
    <h4>Notice type</h4>
    <Select options={ noticeType }  onChange={this.handleNoticeType}/>
    <text style={{color:'red'}}>{this.state.showError && this.state.noticeType=="" &&this.state.noticeTypeError}</text>
   
  </div>
  <div class="form-group">
    <h4>Urgent</h4>
    {/* <Select options={ Urgent } onChange={this.handleUrgent} /> */}
   <input type="checkbox" onChange={()=>this.handleUrgent(true)} checked={this.state.urgent}/> True <input type="checkbox" onChange={()=>this.handleUrgent(false)} checked={!this.state.urgent} /> False 
  
  </div>
  <div class="form-group">
    <h4>Status</h4>
    {/* <Select options={ Urgent } onChange={this.handleStatus} /> */}
    <input type="checkbox" onChange={()=>this.handleStatus(true)} checked={this.state.status}/> True <input type="checkbox" onChange={()=>this.handleStatus(false)} checked={!this.state.status} /> False 
  </div>
  <div class="form-group">
    <h4>Department</h4>
    <Select options={ department }  onChange={this.handleDepartment}/>
    <text style={{color:'red'}}>{this.state.showError && this.state.department=="" &&this.state.departmentError}</text>
  
  </div>
  <div class="form-group">
    <h4>Date</h4>
    <DatePicker
        className="date-picker"
        selected={this.state.startDate}
        onChange={this.handleStartDate}
      />
   
  </div>

  <div class="form-group">
    <h4>Expire period</h4>
    <DatePicker
    className="date-picker"
        selected={this.state.expiryDate}
        onChange={this.handleExpiryDate}
      />
  </div>

  <div class="form-group">
    <h4>Message</h4>
    <textarea class="form-control rounded-0"  rows="6" onChange={this.handleMessage} maxLength="90"/>
    <text style={{color:'red'}}>{this.state.showError && this.state.message==""&&this.state.messageError}</text>
  </div>

 
  <input type="submit" class="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit} value="Submit"/>
</form>
</div>
</div>
</div>
<Modal isOpen={this.state.modal} toggle={this.showModal} >
          <ModalHeader toggle={this.showModal}>Successful</ModalHeader>
          <ModalBody>
            your notice is posted.
          </ModalBody>
          <ModalFooter>
           
            <Button color="primary" onClick={this.showModal}>okay</Button>
          </ModalFooter>
        </Modal>
</div>
    );
  }
}

export default NoticePost;
