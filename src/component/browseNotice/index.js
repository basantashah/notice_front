import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
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
            data:[
   
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
    const res = await fetch(config.notice,{
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
      <div class="backGround-browse">
        <NavBar />
        {this.state.showImportant && 
<div>
<text style={{fontSize:20,marginLeft:10,marginTop:40,marginBottom:20,fontWeight:'bold'}}>Important</text>
  </div>

}
      <div class="row" style={{height:'10%'}}>
      {this.state.data &&
this.state.data.map((item,index)=>{
  if(item.urgent==true)
  return(

  
   <div class="card-wrapper">
<div class="card" style={{backgroundColor:'red'}}>
  <div class="container-fluid">
  
  <div class="text-center">
  
  <h6 style={{fontSize:'90%',color:'#fff',fontWeight:'bold'}}>{item.title}</h6>
  </div>
  <div class ="card-time">

  <h6 class="card-subtitle  float-right" style={{fontSize:'90%'}}>Date : {moment(item.CreatedAt).format("MMMM Do YYYY")}</h6>
  </div>
  <div  class="text-center">
  <p class="card-title" style={{color:'#fff',fontSize:'90%',textAlign:'center'}}>{item.subject}</p>
  </div>
  
  <p class="card-text" style={{fontSize:'90%'}}> {item.content}</p>
  <div  class="text-center">
  <h6 class="card-subtitle " style={{fontSize:'90%'}}> {item.department}</h6>
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
  if(item.urgent==false)
  return(

    
   <div class="card-wrapper">
<div class="card" style={{backgroundColor:'#fff'}}>
  <div class="container-fluid">
  <div  class="text-center">
  <h6 style={{fontSize:'90%',color:'#000',fontWeight:'bold'}}>{item.title}</h6>
  </div>
  <div class ="card-time">
  
  <h6 class="card-subtitle  float-right" style={{color:'#000',fontSize:'90%'}}>Date : {moment(item.CreatedAt).format("MMMM Do YYYY")}</h6>
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


  )
})
}
      </div>
      </div>
      
    );
  }
}

export default LoginPage;
