import React, {PureComponent} from "react";
import {getUiID} from "../../Util/UuID";
import {createBEMclass} from "../../Util/BEM";
import "./UserInfo.style.scss";

export default class UserInfo extends PureComponent {
    state = {
        uu_id: "",
    };

    componentDidMount() {
        this.setUserId();
    }

    setUserId() {
        this.setState({ uu_id: getUiID() });
    }

    getOrderByUUid() {
        const { uu_id } = this.state;

        fetch('api/user/orders/read',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uu_id }),
        }).then(response => response.json())
        .then(data => console.log(data));
    }

    render() {
        const {uu_id} = this.state;

        return (
            <>
                <div className={createBEMclass("UserInfo", "UniqId")}>
                    Hello Friend, your uniq userID is: {uu_id}
                </div>
                <button onClick={() => this.getOrderByUUid()}> TEST</button>
            </>
        );
    }
}
