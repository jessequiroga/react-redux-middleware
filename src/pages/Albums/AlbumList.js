import React from 'react';
import { List } from 'antd';

const AlbumList = (props) => {
    const { albums, userId } = props;

    return (
        <List
            size="large"
            bordered
            dataSource={albums}
            renderItem={item =>
                <List.Item>
                    <a href={"/users/" + userId + "/albums/" + item.id + "/photos"} >{item.title}</a>
                </List.Item>
            }
        />
    );
}

export default AlbumList;
