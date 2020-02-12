import React from 'react';
import { connect } from 'react-redux';
import FilterList from './FilterList';
import { List, Typography, Button, Row, Col } from 'antd';
import { markAsDone } from '../../actions/TodoPageAction';
import { bindActionCreators } from 'redux';
import SearchBar from './SearchBar';

const TodoList = (props) => {
    const { todoList, selectedFilter, keyWord, markAsDone, isTodoLoading } = props;

    const markDone = (id) => {
        markAsDone(id);
    };

    return (
        <List
            loading={isTodoLoading}
            style={{
                backgroundColor: "white"
            }}
            header={
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <h2>Todo List</h2>
                    </Col>
                    <Col span={12}>
                        <Row type="flex" justify="end">
                            <SearchBar />
                            <FilterList />
                        </Row>
                    </Col>
                </Row>
            }
            bordered
            dataSource={
                selectedFilter == "All" && keyWord == '' ?
                    todoList
                    :
                    selectedFilter == "All" ?
                        todoList.filter(item => item.title.toUpperCase().match(keyWord.toUpperCase()))
                        :
                        todoList.filter(item => item.completed == selectedFilter && item.title.toUpperCase().match(keyWord.toUpperCase()))
            }
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        description={
                            <div>
                                {
                                    item.completed ?
                                        <Typography.Text delete>[Done]</Typography.Text>
                                        :
                                        <Typography.Text mark>[Doing]</Typography.Text>
                                }
                                &nbsp;
                                {item.title}
                            </div>
                        }
                    />
                    {
                        !item.completed ?
                            <Button onClick={() => markDone(item.id)} shape="circle" type="danger" icon="check"></Button>
                            :
                            <div></div>
                    }
                </List.Item>
            )}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        todoList: state.todoPage.todoList,
        selectedFilter: state.todoPage.selectedFilter,
        keyWord: state.todoPage.keyWord,
        isTodoLoading: state.todoPage.loadingTodo
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ markAsDone }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
