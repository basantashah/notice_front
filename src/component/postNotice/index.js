import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './postNotice.css'
const wrapper = {
  display:'flex',
  'flex-direction':'row',
  
}


const noticeType = [
  {
    label: "True",value:true
  },
  {
    label: "False",value:false
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
            expiryDate: new Date()
        }
       // this.handleChange = this.handleChange.bind(this)
       this.handleDate = this.handleDate.bind(this)
    }
handleChange = (key,value)=> {
    console.log(key,value)
    this.setState({
        [key]:value.target.value
    })
}

handleDate(date) {
  this.setState({
    startDate: date
  });
}

handleNoticeType = (selectedOption) => {
  console.log('notice type',selectedOption)
  this.setState({
    noticeType:selectedOption.value
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
     <div class="post-notice">
<form>
  <div class="form-group">
    <label>Notice type</label>
    <Select options={ noticeType } value={this.state.noticeType} onChange={this.handleNoticeType}/>
    {console.log('test notice',this.state.noticeType)}
  </div>
  <div class="form-group">
    <h3>Urgent</h3>
    <Select options={ Urgent } />
  </div>

  <div class="form-group">
    <label>Date</label>
    <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDate}
      />
    {console.log(this.state.startDate)}
  </div>

  <div class="form-group">
    <label>Expire period</label>
    <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDate}
      />
    {console.log(this.state.startDate)}
  </div>

  

  <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
    <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>

 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    );
  }
}

export default NoticePost;
