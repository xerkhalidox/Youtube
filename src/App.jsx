import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';
import youtubeAPI from './api/youtube';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(searchTerm) {
    const response = await youtubeAPI.get('search', {
      params: {
        q: searchTerm,
      },
    });
    console.log(response);
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
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              <h1>Video List</h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default App;
