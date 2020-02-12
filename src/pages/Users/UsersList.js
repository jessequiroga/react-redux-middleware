import React from 'react';
import { List, Avatar, Skeleton } from 'antd';
import { connect } from 'react-redux';

const UsersList = (props) => {
    const { handleKeyword, users } = props;

    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={
                handleKeyword == "" ?
                    users
                    :
                    users.filter(user => user.name.toUpperCase().match(handleKeyword.toUpperCase()))
            }
            renderItem={item => (
                <List.Item
                    actions={
                        [
                            <a href={"/users/" + item.id + "/todo"} key="list-loadmore-edit">Todo</a>,
                            <a href={"/users/" + item.id + "/albums"} key="list-loadmore-more">Albums</a>
                        ]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            avatar={
                                <Avatar style={{ backgroundColor: '#ffbf00' }} icon="user" />
                            }
                            title={<a>{item.name}</a>}
                            description={item.email}
                        />
                        <div>{item.phone}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        handleKeyword: state.userPage.keyWord,
        users: state.userPage.users
    };
};

export default connect(mapStateToProps)(UsersList);
