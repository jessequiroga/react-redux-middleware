import React from 'react';
import { Card, Icon } from 'antd';

const PhotoCard = (props) => {
    const { Meta } = Card;
    const { photo, isLoading } = props;

    return (
        <Card
            loading={isLoading}
            style={{ width: 300, margin: 30 }}
            cover={
                <img
                    alt="example"
                    src={photo.url ?
                        photo.url
                        :
                        "https://i.dlpng.com/static/png/5285108-loading-png-89-images-in-collection-page-3-loading-png-296_293_preview.png"
                    }
                />
            }
            actions={
                [
                    <a href={photo.thumbnailUrl}><Icon type="link" key="link" /></a>,
                ]}
        >
            <Meta
                title={photo.title}
            />
        </Card >
    );
}

export default PhotoCard;
