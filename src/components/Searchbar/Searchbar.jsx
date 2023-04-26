import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
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
    if (this.state.query.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <SearchSection>
        <Form onSubmit={this.onSubmit}>
          <button type="submit" class="button">
            <span class="button-label">
              <ImSearch style={{ margin: '8px' }} />
            </span>
          </button>

          <Input
            onChange={this.handleQueryChange}
            class="input"
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </Form>
      </SearchSection>
    );
  }
}
