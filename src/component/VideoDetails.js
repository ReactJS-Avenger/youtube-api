import React from 'react';

const VideoDetails = ({ video }) => {
    console.log(video)
    if (!video) {
        return <div>Loading.....</div>
    }
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videosrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
            </div>
        </div>
    )
}
export default VideoDetails;