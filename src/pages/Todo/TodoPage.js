import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Header from '../../component/Header';
import UserInfo from './UserInfo';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { fetchUser, fetchTodo } from '../../actions/TodoPageAction';
import { bindActionCreators } from 'redux';

const TodoPageRedux = (props) => {
    const userId = props.match.params.user_id;
    const { fetchUser, fetchTodo } = props

    useEffect(() => {
        fetchUser(userId);
        fetchTodo(userId);
    }, []);

    return (
        <div style={{ backgroundColor: "#EEEEEE", minHeight: "100vh" }}>
            <Row type="flex" justify="center">
                <Col span={20} style={{ marginTop: 30 }}>
                    <Header
                        title="Todo List"
                        onBackGoto="/users" />
                </Col>
                <Col span={20} style={{ margin: "30px 0px" }}>
                    <UserInfo />
                </Col>
                <Col span={20} style={{ marginBottom: 30 }}>
                    <TodoList />
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProp = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchUser, fetchTodo }, dispatch);
};

export default connect(mapStateToProp, mapDispatchToProps)(TodoPageRedux);
