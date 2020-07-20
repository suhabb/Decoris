import React from 'react';
import SearchBar from "./SearchBar"
import Youtube from "./Config"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

export default class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onSearchSubmit = async (searchText) => {
        const response = await Youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: 'AIzaSyB3zOk-D4isWcG9GQrPWkik8WcMawufWnw',
                q: searchText
            }
        });
        console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    componentDidMount(){
        this.onSearchSubmit('building');
    }

    onVideoSelect = (video) => {
        console.log("Video:" + video.snippet)
        this.setState({ selectedVideo: video })
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}