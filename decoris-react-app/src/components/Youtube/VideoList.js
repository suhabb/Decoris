import React from 'react';
import VideoItem from './VideoItem'

const VideoList = (props) => {
    const renderList = props.videos.map((video) => {
        return (
            <div>
                <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video} />
            </div>
        );

    });

    return (
        <div className="ui relaxed divided list">{renderList}</div>
    )
}

export default VideoList;