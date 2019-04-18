import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const wrapper = {
  display:'flex',
  'flex-direction':'row',
  
}


const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

class LoginPage extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            password:'',
            startDate:new Date()
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

postNotice = () => {
    this.props.history.push('/notice')
}
browseNotice = () => {
    this.props.history.push('/noticeboard')
}

  render() {
    return (
     
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Notice type</label>
    <Select options={ techCompanies } />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Urgent</label>
    <Select options={ techCompanies } />
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Date</label>
    <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDate}
      />
    {console.log(this.state.startDate)}
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Expire period</label>
    <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDate}
      />
    {console.log(this.state.startDate)}
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
    <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDate}
      />
    {console.log(this.state.startDate)}
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
    <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>

 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  
    );
  }
}

export default LoginPage;
