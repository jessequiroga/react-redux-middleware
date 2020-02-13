import React from 'react';
import { PageHeader, Button } from 'antd';
import { useHistory } from "react-router-dom";

const Header = (props) => {
    const { title, onBackGoto } = props;
    const history = useHistory();

    return (
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
                borderRadius: "10px",
                backgroundColor: "white"
            }}
            onBack={() => history.push(onBackGoto)}
            title={title}
            extra={[
                <Button key="logoutBtn" type="danger" onClick={() => history.push("/processLogout")}>Logout</Button>
            ]}
        />
    );
};

export default Header;
