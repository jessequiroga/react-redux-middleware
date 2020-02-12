import React, { useState, useEffect } from 'react';
import AlbumList from './AlbumList';
import { Row, Col } from 'antd';
import Header from '../../component/Header';

const AlbumsPage = (props) => {
    const userId = props.match.params.user_id;
    const [user, setUser] = useState({});
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchUserData();
        fetchAlbumsData();
    }, [])

    const fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUser(data);
            })
            .catch(error => console.log(error));
    }

    const fetchAlbumsData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data);
            })
            .catch(error => console.log(error));
    }

    return (
        <Row type="flex" justify="center" style={{ marginTop: 30 }}>
            <Col span={20} style={{ marginBottom: 10 }}>
                <Header
                    title={user.name + "'s album"}
                    onBackGoto="/users" />
            </Col>
            <Col span={20}>
                <AlbumList
                    userId={userId}
                    albums={albums} />
            </Col>
        </Row>
    );
}

export default AlbumsPage;
