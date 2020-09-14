import React from 'react';
import { Paper, Typography } from '@material-ui/core';

export default function VideoDetail({ video }) {
  const baseUrl = 'https://www.youtube.com/embed/';
  if (!video) {
    return <p>Start Searching</p>;
  }
  return (
    <>
      <Paper elevation={6} style={{ height: '100%' }}>
        <iframe
          src={baseUrl + video.id.videoId}
          frameBorder="0"
          title="Video Player"
          width="100%"
          height="100%"
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: '15px' }}>
        <Typography variant="subtitle1">{video.snippet.title}</Typography>
        <Typography variant="subtitle2">
          {video.snippet.channelTitle}
        </Typography>
      </Paper>
    </>
  );
}
