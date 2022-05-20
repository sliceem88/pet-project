import React, { Component } from "react";
import { getUiID } from "../../Util/UuID";
import { createBEMclass } from "../../Util/BEM";
import "./UserInfo.style.scss";

export default class UserInfo extends Component {
  state = {
    uu_id: "",
  };

  componentDidMount() {
    this.setUserId();
  }

  setUserId() {
    this.setState({ uu_id: getUiID() });
  }

  render() {
    const { uu_id } = this.state;

    return (
      <div className={createBEMclass("UserInfo", "UniqId")}>
        Hello Friend, your uniq userID is: {uu_id}
      </div>
    );
  }
}
