import React from 'react';
import { Icon, Input, Button, Row, Col } from 'antd';

const LoginPage = () => {
    return (
        <div style={{ minHeight: "100vh", background: "#EEEEEE" }}>
            <Row type="flex" justify="center" >
                <Col span={20} style={{ textAlign: "center", marginTop: 50 }}>
                    <h1>Login</h1>
                </Col>
                <Col span={5}>
                    <Row type="flex" justify="center">
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            style={{ marginTop: 30 }}
                            size="large"
                        />
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            style={{ marginTop: 30 }}
                            size="large"
                        />
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ marginTop: 30, width: "100%" }}
                            size="large"
                            onClick={() => {
                                window.location.pathname = "/processlogin"
                            }}
                        >Log in
                    </Button>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
