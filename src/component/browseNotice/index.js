import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Cookies from "universal-cookie";
import NavBar from "../navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import moment from "moment";
import config from "../../config/config";
import star from "../../assets/rStar.png";
import { async } from "q";
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      urgent: [],
      normal: [],
      showImportant: false,
      showNormal: false,
      data: []
    };
    // this.handleChange = this.handleChange.bind(this)
    this.getBrowseData = this.getBrowseData.bind(this);
  }
  handleChange = (key, value) => {
    console.log(key, value);
    this.setState({
      [key]: value.target.value
    });
  };

  checkData = async () => {
    this.state.data.map((item, index) => {
      if (item.urgent == true) {
        this.setState({
          showImportant: true
        });
        return;
      }
      if (item.urgent == false) {
        this.setState({
          showNormal: true
        });
      }
    });
  };
  getBrowseData = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    try {
      const res = await fetch(config.notice, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });

      let response = await res.json();
      console.log("res", response);
      if (response.status == true) {
        await this.setState({
          data: response.data
        });
        this.checkData();
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount = async () => {
    this.updateNotice = setInterval(() => this.getBrowseData(), 5000);
  };
  componentWillUnmount = () => {
    clearInterval(this.updateNotice);
  };
  urgentFormatter = item => {
    let today = moment(item.schedule).isAfter(moment(), 'day');
    let expiry = moment(moment(),'day').isBefore(item.expiry)
    console.log("today",today)
    console.log("Expiry",expiry)
    console.log("today and expiry",today && expiry)
    if (item.type == "application" && today && expiry) {
      return (
        <div class="card-wrapper" key={item.id}>
          <div class="mainRectangle">
            <div class="star">
              <img
                src={star}
                alt="important"
                height="30"
                width="30"
                style={{ marginTop: -15, marginRight: -15, marginLeft: -15 }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <div class="rectangleTitle">{item.title}</div>
              <div class="rectangleTime">
                {moment(item.schedule).format("MMMM Do YYYY")}
              </div>
              <div class="rectangleSubject">{item.subject}</div>
              <div class="rectangleBody">{item.content}</div>
              <div class="rectangleDepart">{item.department}</div>
            </div>
          </div>
        </div>
      );
    } else {
      if(today && expiry){
      return (
        <div class="card-wrapper" key={item.id}>
          <div class="noticeRectangle">
            <div class="star">
              <img
                src={star}
                alt="important"
                height="30"
                width="30"
                style={{ marginTop: -15, marginRight: -15 }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <div class="noticeTitle">{item.title}</div>
              <div class="noticeTime">
                {moment(item.schedule).format("MMMM Do YYYY")}
              </div>
              <div class="noticeSubject">{item.subject}</div>
              <div class="noticeBody">{item.content}</div>
              <div class="noticeDepart">{item.department}</div>
            </div>
          </div>
        </div>
      );
      }
    }
  };
  normalFormatter = item => {
    let today = moment(item.schedule).isAfter(moment(), 'day');
    let expiry = moment(moment(),'day').isBefore(item.expiry)
    if (item.type == "application" && today && expiry ) {
      return (
        <div class="card-wrapper" key={item.id}>
          <div class="mainRectangle">
            <div style={{ padding: 10 }}>
              <div class="rectangleTitle">{item.title}</div>
              <div class="rectangleTime">
                {moment(item.schedule).format("MMMM Do YYYY")}
              </div>
              <div class="rectangleSubject">{item.subject}</div>
              <div class="rectangleBody">{item.content}</div>
              <div class="rectangleDepart">{item.department}</div>
            </div>
          </div>
        </div> 
      );
    } else {
      if(today && expiry ){
      return (
        <div class="card-wrapper" key={item.id}>
          <div class="noticeRectangle">
            <div style={{ padding: 10 }}>
              <div class="noticeTitle">{item.title}</div>
              <div class="noticeTime">
                {moment(item.schedule).format("MMMM Do YYYY")}
              </div>
              <div class="noticeSubject">{item.subject}</div>
              <div class="noticeBody">{item.content}</div>
              <div class="noticeDepart">{item.department}</div>
            </div>
          </div>
        </div>
      );
      }
    }
  };

  render() {
    return (
      <div>
        <NavBar />

        <div class="row" style={{ margin: 5 }}>
          {this.state.data &&
            this.state.data.map((item, index) => {
              if (item.urgent == true) return this.urgentFormatter(item);
            })}
        </div>

        <div class="row" style={{ margin: 5 }}>
          {this.state.data &&
            this.state.data.map((item, index) => {
              if (item.urgent == false) return this.normalFormatter(item);
            })}
        </div>
      </div>
    );
  }
}

export default LoginPage;
