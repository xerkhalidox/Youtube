import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';
import youtubeAPI from './api/youtube';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      currentVideo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(searchTerm) {
    try {
      const response = await youtubeAPI.get('search', {
        params: {
          q: searchTerm,
        },
      });
      this.setState({
        videos: response.data.items,
        currentVideo: response.data.items[0],
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={this.state.currentVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default App;
