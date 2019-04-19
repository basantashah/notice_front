import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
class LoginPage extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            password:'',
            data:[
              {
                'date':'2018-03-17',
                'head':'collect your id card',
                'message':'please collect your id card from student department as soon as possible',
                'issuer':'student department'
              },
              {
                'date':'2018-03-17',
                'head':'collect your id card',
                'message':'please collect your id card from student department as soon as possible',
                'issuer':'student department'
              },
              {
                'date':'2018-03-17',
                'head':'collect your id card',
                'message':'please collect your id card from student department as soon as possible',
                'issuer':'student department'
              },
              {
                'date':'2018-03-17',
                'head':'collect your id card',
                'message':'please collect your id card from student department as soon as possible',
                'issuer':'student department'
              },
              {
                'date':'2018-03-17',
                'head':'collect your id card',
                'message':'please collect your id card from student department as soon as possible',
                'issuer':'student department'
              },
              {
                'date':'2018-03-17',
                'head':'collect your id card',
                'message':'please collect your id card from student department as soon as possible',
                'issuer':'student department'
              }
            ]
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

}
browseNotice = () => {
    
}

  render() {
    return (
      <div class="row">
{this.state.data.map((item,index)=>{
  return(

    <div class="col-sm-4">
    <div class="card-wrapper">
    <div class="card">
  <div class="card-body">
  <h6 class="card-subtitle mb-2 text-muted">{item.date}</h6>
  <h5 class="card-title">{item.head}</h5>
  <p class="card-text"> {item.message}</p>
  <h6 class="card-subtitle mb-2 text-muted"> {item.issuer}</h6>
  
  </div>
</div>
</div>
</div>
  )
})}
      </div>
      
    );
  }
}

export default LoginPage;
