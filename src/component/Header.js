import React from 'react';
import { PageHeader } from 'antd';

const Header = (props) => {
    const { title, onBackGoto } = props;

    return (
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
                borderRadius: "10px",
                backgroundColor: "white"
            }}
            onBack={() => window.location.pathname = onBackGoto}
            title={title}
        />
    );
}

export default Header;
