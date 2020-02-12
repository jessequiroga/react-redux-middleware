import React, { useEffect } from 'react';
import UsersList from './UsersList';
import SearchUser from './SearchUser';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/UsersPageAction';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';

const UserPage = (props) => {
    const { fetchUsers } = props;

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <Row type="flex" justify="center">
                <Col span={20} style={{ margin: "30px 0px" }}>
                    <NavBar
                        title="User Page" />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col>
                    <SearchUser />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={20}>
                    <UsersList />
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchUsers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
