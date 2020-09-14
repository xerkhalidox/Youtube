import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { videoSrc: null };
  }

  UNSAFE_componentWillReceiveProps(props) {
    const baseUrl = 'https://www.youtube.com/embed/';
    this.setState({ videoSrc: baseUrl + props.video.id.videoId });
  }

  render() {
    if (!this.state.videoSrc) {
      return <p>No Videos</p>;
    }
    return (
      <>
        <Paper elevation={6} style={{ height: '100%' }}>
          <iframe
            src={this.state.videoSrc}
            frameBorder="0"
            title="Video Player"
            width="100%"
            height="100%"
          ></iframe>
        </Paper>
        <Paper elevation={6} style={{ padding: '60px' }}></Paper>
      </>
    );
  }
}
