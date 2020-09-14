import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.baseUrl = 'https://www.youtube.com/embed/';
    this.state = {
      video: props.video,
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      video: props.video,
    });
  }

  render() {
    if (!this.state.video) {
      return <p>No Videos</p>;
    }
    return (
      <>
        <Paper elevation={6} style={{ height: '100%' }}>
          <iframe
            src={this.baseUrl + this.state.video.id.videoId}
            frameBorder="0"
            title={this.state.video.snippet.title || 'Video Player'}
            width="100%"
            height="100%"
          ></iframe>
        </Paper>
        <Paper elevation={6} style={{ padding: '60px' }}></Paper>
      </>
    );
  }
}
