import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Cookies from "universal-cookie";
import NavBar from "../navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import moment from "moment";
import config from "../../config/config";
import star from "../../assets/rStar.png";
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
      data: [
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "application",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: true,
          status: true,
          type: "notice",
          user_id: 1
        },
        {
          id: 21,
          CreatedAt: "2019-05-03T13:06:32.408767+05:45",
          UpdatedAt: "2019-05-03T13:06:32.408767+05:45",
          DeletedAt: null,
          title:
            "title Ipsum has been the industry's standard dummy text ever since the",
          expiry: "2018-09-22T11:27:31+05:45",
          subject:
            "subject Ipsum has been the industry's standard dummy text ever since the",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          department: "RTE department",
          urgent: false,
          status: true,
          type: "application",
          user_id: 1
        }
      ]
    };
    // this.handleChange = this.handleChange.bind(this)
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

  componentDidMount = async () => {
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

  urgentFormatter = item => {
    if (item.type == "application") {
      return (
        <div class="card-wrapper">
          <div class="mainRectangle">
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
              <div class="rectangleTitle">{item.title}</div>
              <div class="rectangleTime">
                {moment(item.CreatedAt).format("MMMM Do YYYY")}
              </div>
              <div class="rectangleSubject">{item.subject}</div>
              <div class="rectangleBody">{item.content}</div>
              <div class="rectangleDepart">{item.department}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="card-wrapper">
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
                {moment(item.CreatedAt).format("MMMM Do YYYY")}
              </div>
              <div class="noticeSubject">{item.subject}</div>
              <div class="noticeBody">{item.content}</div>
              <div class="noticeDepart">{item.department}</div>
            </div>
          </div>
        </div>
      );
    }
  };
  normalFormatter = item => {
    if (item.type == "application") {
      return (
        <div class="card-wrapper">
          <div class="mainRectangle">
            <div style={{ padding: 10 }}>
              <div class="rectangleTitle">{item.title}</div>
              <div class="rectangleTime">
                {moment(item.CreatedAt).format("MMMM Do YYYY")}
              </div>
              <div class="rectangleSubject">{item.subject}</div>
              <div class="rectangleBody">{item.content}</div>
              <div class="rectangleDepart">{item.department}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="card-wrapper">
          <div class="noticeRectangle">
            <div style={{ padding: 10 }}>
              <div class="noticeTitle">{item.title}</div>
              <div class="noticeTime">
                {moment(item.CreatedAt).format("MMMM Do YYYY")}
              </div>
              <div class="noticeSubject">{item.subject}</div>
              <div class="noticeBody">{item.content}</div>
              <div class="noticeDepart">{item.department}</div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <NavBar />

        <div class="row" style={{ margin:5 }}>
          {this.state.data &&
            this.state.data.map((item, index) => {
              if (item.urgent == true) return this.urgentFormatter(item);
            })}
        </div>

        <div class="row" style={{ margin:5 }}>
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
