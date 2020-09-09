import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  handleSubmit(e) {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    e.preventDefault();
  }
  render() {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}
