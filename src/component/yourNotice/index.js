import React, { Component } from "react";
import Cookies from "universal-cookie";
import Select from "react-select";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import NavBar from "../navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import moment from "moment";
import config from "../../config/config";
import star from "../../assets/rStar.png";
import Switch from "react-switch";

const noticeType = [
  {
    label: "Notice",
    value: "notice"
  },
  {
    label: "Application",
    value: "application"
  },
  {
    label: "Schedule",
    value: "schedule"
  }
];

const Urgent = [
  {
    label: "True",
    value: true
  },
  {
    label: "False",
    value: false
  }
];

const department = [
  {
    label: "RTE",
    value: "RTE"
  },
  {
    label: "Finance",
    value: "Finance"
  },
  {
    label: "Student Department",
    value: "Student Department"
  },
  {
    label: "ACADEMIC",
    value: "ACADEMIC"
  },
  {
    label: "IT",
    value: "IT"
  },
  {
    label: "Other",
    value: "Other"
  }
];

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
      data: [],
      modal: false,
      modalItem: "",
      editableModal: false,
      type: "",
      isNotice: false,
      title: null,
      subject: null,
      urgent: null,
      status: null,
      department: null,
      content: null
    };
    // this.handleChange = this.handleChange.bind(this)
    this.showModal = this.showModal.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }
  handleChange = (key, value) => {
    console.log(key, value);
    this.setState({
      [key]: value.target.value
    });
  };
  showModal(item) {
    console.log("modal test", item);

    if (this.state.modal) {
      this.setState({
        modalItem: "",
        modal: false,
        editableModal: false
      });
    } else {
      if (item.type == "notice") {
        this.setState({
          isNotice: true
        });
      } else {
        this.setState({
          isNotice: false
        });
      }
      this.setState({
        modalItem: item,
        title: item.title,
        subject: item.subject,
        urgent: item.urgent,
        status: item.status,
        department: item.department,
        content: item.content,
        type: item.type,
        modal: true
      });
    }
  }

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
      const res = await fetch(config.yourNotice, {
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
  handleText = (key, value) => {
    this.setState({
      [key]: value.target.value
    });
  };
  handleType = e => {
    this.setState({
      isNotice: e
    });
  };

  handleStatus = e => {
    this.setState({
      status: !this.state.status
    });
  };
  handleUrgent = e => {
    this.setState({
      urgent: !this.state.urgent
    });
  };
  handleDepartment = selectedOption => {
    console.log("notice type", selectedOption);
    this.setState({
      department: selectedOption.value
    });
  };

  deleteData = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    try {
      console.log("submitting put req");
      console.log(this.state.modalItem.id);
      const response = await fetch(config.deleteNotice, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          id: this.state.modalItem.id
        })
      });

      let res = await response.json();
      console.log("responseeeeee", res);
      if (res.status) {
        this.setState({
          modal: !this.state.modal
        });
        this.componentDidMount();
      }
    } catch (e) {}
  };

  updateData = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    try {
      const response = await fetch(config.updateNotice, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
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
          subject: this.state.subject,
          title: this.state.title,
          urgent: this.state.urgent,
          type: this.state.isNotice ? "notice" : "application",
          user_id: this.state.modalItem.user_id
        })
      });

      let res = await response.json();
      console.log("responseeeeee", res);
      if (res.status) {
        this.setState({
          modal: !this.state.modal
        });
        this.componentDidMount();
      }
    } catch (e) {}
  };
  urgentFormatter = item => {
    if (item.type == "application") {
      return (
        <div class="card-wrapper" onClick={() => this.showModal(item)}>
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
        <div class="card-wrapper" onClick={() => this.showModal(item)}>
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
        <div class="card-wrapper" onClick={() => this.showModal(item)}>
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
        <div class="card-wrapper" onClick={() => this.showModal(item)}>
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
      <div class="backGround">
        <NavBar />
        {this.state.showImportant && (
          <div>
            <text
              style={{
                fontSize: 20,
                marginLeft: 10,
                marginTop: 40,
                marginBottom: 20,
                fontWeight: "bold"
              }}
            >
              Important
            </text>
          </div>
        )}
        <div class="row" style={{ margin: 5 }}>
          {this.state.data &&
            this.state.data.map((item, index) => {
              if (item.urgent === true) return this.urgentFormatter(item);
            })}
        </div>
        {this.state.showNormal && (
          <div>
            <text
              style={{
                fontSize: 20,
                marginLeft: 10,
                marginTop: 40,
                marginBottom: 20,
                fontWeight: "bold"
              }}
            >
              OTHER
            </text>
          </div>
        )}
        <div class="row" style={{ margin: 5 }}>
          {this.state.data &&
            this.state.data.map((item, index) => {
              if (item.urgent === false) return this.normalFormatter(item);
            })}
        </div>

        <Modal isOpen={this.state.modal} toggle={this.showModal}>
          <ModalHeader toggle={this.showModal}>
            {this.state.editableModal ? (
              <div>
                <h4>Title</h4>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Update the title of the notice"
                  required="required"
                  value={this.state.title}
                  onChange={text => this.handleText("title", text)}
                  maxLength="70"
                />
              </div>
            ) : (
              <div>
                <label style={{ fontSize: 16, marginRight: 30 }}>Title :</label>
                {this.state.title}
              </div>
            )}
          </ModalHeader>
          <ModalBody>
            {this.state.editableModal ? (
              <div>
                <div>
                  <h5>Subject</h5>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Update the subject of your notice"
                    required="required"
                    value={this.state.subject}
                    onChange={text => this.handleText("subject", text)}
                    maxLength="70"
                  />
                </div>
                <div>
                  <h5>Urgent</h5>
                  {/* <input
                    type="checkbox"
                    onChange={() => this.handleUrgent(true)}
                    checked={this.state.urgent}
                  />{" "}
                  True{" "}
                  <input
                    type="checkbox"
                    onChange={() => this.handleUrgent(false)}
                    checked={!this.state.urgent}
                  />{" "}
                  false */}
                  <Switch
                    onChange={this.handleUrgent}
                    checked={this.state.urgent}
                    id="normal-switch"
                  />
                </div>
                <div>
                  <h5>Type</h5>
                  <input
                    type="checkbox"
                    onChange={() => this.handleType(true)}
                    checked={this.state.isNotice}
                  />{" "}
                  Notice{" "}
                  <input
                    type="checkbox"
                    onChange={() => this.handleType(false)}
                    checked={!this.state.isNotice}
                  />{" "}
                  Application
                </div>
                <div>
                  <h5>Status</h5>
                  {/* <input
                    type="checkbox"
                    onChange={() => this.handleStatus(true)}
                    checked={this.state.status}
                  />{" "}
                  True{" "}
                  <input
                    type="checkbox"
                    onChange={() => this.handleStatus(false)}
                    checked={!this.state.status}
                  />{" "}
                  False */}
                  <Switch
                    onChange={this.handleStatus}
                    checked={this.state.status}
                    id="normal-switch"
                  />
                </div>
                <div>
                  <h5>Department</h5>
                  <Select
                    options={department}
                    onChange={this.handleDepartment}
                  />
                </div>
                <div>
                  <h5>Message</h5>
                  <textarea
                    class="form-control rounded-0"
                    rows="6"
                    value={this.state.content}
                    onChange={text => this.handleText("content", text)}
                    maxLength="300"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <label style={{ fontSize: 16, marginRight: 30 }}>
                    Subject :{" "}
                  </label>
                  {this.state.modalItem.subject}
                </div>
                <div>
                  <label style={{ fontSize: 16, marginRight: 30 }}>
                    Urgent :{" "}
                  </label>
                  {this.state.modalItem.urgent ? "True" : "False"}
                </div>
                <div>
                  <label style={{ fontSize: 16, marginRight: 30 }}>
                    Status :{" "}
                  </label>
                  {this.state.modalItem.status ? "True" : "False"}
                </div>
                <div>
                  <label style={{ fontSize: 16, marginRight: 30 }}>
                    Type :{" "}
                  </label>
                  {this.state.modalItem.type}
                </div>
                <div>
                  <label style={{ fontSize: 16, marginRight: 30 }}>
                    Department :{" "}
                  </label>
                  {this.state.modalItem.department}
                </div>
                <div>
                  <label style={{ fontSize: 16, marginRight: 30 }}>
                    Message :{" "}
                  </label>
                  {this.state.modalItem.content}
                </div>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            {this.state.editableModal ? (
              <div>
                <Button
                  color="primary"
                  onClick={() => this.setState({ editableModal: false })}
                >
                  cancel
                </Button>{" "}
                <Button color="danger" onClick={() => this.updateData()}>
                  update
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  color="primary"
                  onClick={() => this.setState({ editableModal: true })}
                >
                  Edit
                </Button>{" "}
                <Button color="danger" onClick={() => this.deleteData()}>
                  Delete
                </Button>
              </div>
            )}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginPage;
