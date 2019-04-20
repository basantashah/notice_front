import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
import NavBar from '../navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import config from '../../config/config'
class LoginPage extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            password:'',
            data:[
              {
                "ID": 1,
                "CreatedAt": "2019-04-20T13:28:54.188746+05:45",
                "UpdatedAt": "2019-04-20T13:28:54.188746+05:45",
                "DeletedAt": null,
                "subject": "New routing published",
                "content": "Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.",
                "department": "RTE department",
                "urgent": "TRUE",
                "status": "TRUE",
                "user_id": 2
            },
            {
              "ID": 1,
              "CreatedAt": "2019-04-20T13:28:54.188746+05:45",
              "UpdatedAt": "2019-04-20T13:28:54.188746+05:45",
              "DeletedAt": null,
              "subject": "New routing published",
              "content": "Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.",
              "department": "RTE department",
              "urgent": "TRUE",
              "status": "TRUE",
              "user_id": 2
          },
          {
            "ID": 1,
            "CreatedAt": "2019-04-20T13:28:54.188746+05:45",
            "UpdatedAt": "2019-04-20T13:28:54.188746+05:45",
            "DeletedAt": null,
            "subject": "New routing published",
            "content": "Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.",
            "department": "RTE department",
            "urgent": "TRUE",
            "status": "TRUE",
            "user_id": 2
        },
        {
          "ID": 1,
          "CreatedAt": "2019-04-20T13:28:54.188746+05:45",
          "UpdatedAt": "2019-04-20T13:28:54.188746+05:45",
          "DeletedAt": null,
          "subject": "New routing published",
          "content": "Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.",
          "department": "RTE department",
          "urgent": "TRUE",
          "status": "TRUE",
          "user_id": 2
      },
      {
        "ID": 1,
        "CreatedAt": "2019-04-20T13:28:54.188746+05:45",
        "UpdatedAt": "2019-04-20T13:28:54.188746+05:45",
        "DeletedAt": null,
        "subject": "New routing published",
        "content": "Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.",
        "department": "RTE department",
        "urgent": "TRUE",
        "status": "TRUE",
        "user_id": 2
    },
    {
      "ID": 1,
      "CreatedAt": "2019-04-20T13:28:54.188746+05:45",
      "UpdatedAt": "2019-04-20T13:28:54.188746+05:45",
      "DeletedAt": null,
      "subject": "New routing published",
      "content": "Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.Please follow the new routing published in website.this is test.",
      "department": "RTE department",
      "urgent": "TRUE",
      "status": "TRUE",
      "user_id": 2
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

// componentDidMount = async()=> {
//   const cookies = new Cookies();
//   const token = cookies.get('token')
//   try{
//     const res = await fetch(config.notice,{
//       method:"GET",
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + token
//       },
//     })
  
//     let response = await res.json();
//     console.log('res',response)
//     if(response.status==true)
//     {
//       this.setState({
//         data:response.data
//       })
//     }
//     else{
   
//     }
//   }
//   catch(e){
//     console.log(e)
//   }
// }

  render() {
    return (
      <div>
        <NavBar />
      <div class="row">
      {this.state.data &&
this.state.data.map((item,index)=>{
  return(

    <div class="col-sm-4 auto">
   <div class="card-wrapper">
<div class="card">
  <div class="container">
  <div class ="card-time">
  <h6 class="card-subtitle mb-2 text-muted">{item.CreatedAt}</h6>
  </div>
  <p class="card-title">{item.subject}</p>
  <p class="card-text"> {item.content}</p>
  <h6 class="card-subtitle mb-2 text-muted"> {item.department}</h6>
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
