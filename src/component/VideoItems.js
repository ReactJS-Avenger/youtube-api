import React from 'react';

import './VideoItem.css'

const VideoItems = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image"
                alt={video.snippet.title}
                src={video.snippet.thumbnails.high.url}
            /><br />
            <div className="content">
                {video.snippet.title}
            </div>
        </div>
    )
}
export default VideoItems;