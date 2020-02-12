import React from 'react';
import { Descriptions, Skeleton } from 'antd';
import { connect } from 'react-redux';

const UserInfo = (props) => {
    const { user, isUserLoading } = props;
    const { address, company } = user;

    return (
        <div style={{ backgroundColor: "white", borderRadius: 10 }}>
            {
                isUserLoading ?
                    <div style={{ padding: 40 }}>
                        <Skeleton active />
                    </div>
                    :
                    <Descriptions bordered>
                        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                        <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
                        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
                        <Descriptions.Item label="Address" span={2}>
                            {
                                address != undefined ?
                                    <div>
                                        {address.street}, {address.suite}
                                        <br />
                                        {address.city}
                                        <br />
                                        {address.zipcode}
                                        <br />
                                    </div>
                                    :
                                    <div></div>
                            }
                        </Descriptions.Item>
                        <Descriptions.Item label="Company" span={3}>
                            {
                                company != undefined ?
                                    <div>
                                        {company.name}
                                        <br />
                                        {company.catchPhrase}
                                        <br />
                                        {company.bs}
                                        <br />
                                    </div>
                                    :
                                    <div></div>
                            }
                        </Descriptions.Item>
                    </Descriptions>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.todoPage.user,
        isUserLoading: state.todoPage.loadingUser
    };
};

export default connect(mapStateToProps)(UserInfo);
