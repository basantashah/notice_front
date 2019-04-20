import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import NavBar from '../navBar'
import "react-datepicker/dist/react-datepicker.css";
import './postNotice.css'
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

class NoticePost extends Component {
    constructor(){
        super();
        this.state={
            noticeType:null,
            urgent:null,
            startDate:new Date(),
            expiryDate: new Date(),
            message:null
        }
       // this.handleChange = this.handleChange.bind(this)
       this.handleStartDate = this.handleStartDate.bind(this)
       this.handleExpiryDate = this.handleExpiryDate.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
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


handleUrgent = (e) => {
  this.setState({
    urgent:e.value
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
handleSubmit = () => {
  
}

  render() {
    return (
      <div>
        <NavBar />
        <div class="post-notice-wrapper">
     <div class="post-notice">
     <div class="card">
<form class="form-notice">
  <div class="form-group">
    <h4>Notice type</h4>
    <Select options={ noticeType }  onChange={this.handleNoticeType}/>
    {console.log('test',this.state.noticeType)}
  </div>
  <div class="form-group">
    <h4>Urgent</h4>
    <Select options={ Urgent } onChange={this.handleUrgent} />
  </div>

  <div class="form-group">
    <h4>Date</h4>
    <DatePicker
        className="date-picker"
        selected={this.state.startDate}
        onChange={this.handleStartDate}
      />
    {console.log(this.state.startDate)}
  </div>

  <div class="form-group">
    <h4>Expire period</h4>
    <DatePicker
    className="date-picker"
        selected={this.state.expiryDate}
        onChange={this.handleExpiryDate}
      />
    {console.log(this.state.startDate)}
  </div>

  

  <div class="form-group">
    <h4>Message</h4>
    <textarea class="form-control rounded-0"  rows="6" onChange={this.handleMessage}/>
  </div>

 
  <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>Submit</button>
</form>
</div>
</div>
</div>
</div>
    );
  }
}

export default NoticePost;
