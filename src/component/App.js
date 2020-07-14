import React from 'react';

import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'

class App extends React.Component {
    state = { video: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('javascript')
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ video: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.video} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;