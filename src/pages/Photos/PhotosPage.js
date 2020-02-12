import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import { Row, Col } from 'antd';
import Header from '../../component/Header';

const PhotosPage = (props) => {
    const albumId = props.match.params.album_id;
    const userId = props.match.params.user_id;
    const [album, setAlbum] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAlbumsData();
        fetchPhotosData();
    }, [])

    const fetchAlbumsData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == albumId) {
                        setAlbum(data[i]);
                        console.log(data[i]);
                    }
                }

            })
            .catch(error => console.log(error));
    }

    const fetchPhotosData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Row type="flex" justify="center">
                <Col span={22} style={{ marginTop: 30 }}>
                    <Header
                        title={album.title}
                        onBackGoto={"/users/" + userId + "/albums"} />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                {
                    photos.map((photo, index) => {
                        return (
                            <PhotoCard
                                key={index}
                                photo={photo}
                                isLoading={isLoading} />
                        )
                    })
                }
            </Row>
        </div>

    );
}

export default PhotosPage;
