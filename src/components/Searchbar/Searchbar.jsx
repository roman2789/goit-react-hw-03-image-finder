import { Component } from 'react';

import { Button } from 'components/Button/Button';
import { SearchSection, Form, Input } from './SearchbarStyled';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <SearchSection>
        <Form onSubmit={this.onSubmit}>
          <Button />

          <Input
            onChange={this.handleQueryChange}
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchSection>
    );
  }
}
