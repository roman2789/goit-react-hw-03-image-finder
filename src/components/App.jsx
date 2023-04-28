import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './AppStyled';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyles } from 'GlobalStyles';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from 'services/getImageApi';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    modalImage: '',
    total: 1,
    error: null,
    empty: false,
  };

  onSearchFormSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      total: 1,
      loading: false,
      error: null,
      empty: false,
    });
  };
  handleLoadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, PrevState) {
    if (
      PrevState.query !== this.state.query ||
      PrevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      const { query, page } = this.state;
      getImages(query, page)
        .then(data => {
          if (data.hits.length === 0) {
            this.setState({ empty: true });
          }
          this.setState(prevState => ({
            page: prevState.page,
            images: [...prevState.images, ...data.hits],
            total: data.total,
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    const { images, loading, total, empty, page } = this.state;
    return (
      <Container>
        <GlobalStyles />
        <Toaster />
        <Searchbar onSubmit={this.onSearchFormSubmit} />

        {empty &&
          toast.error('Нажаль по цьому запиту нічого немає...', {
            duration: 2000,
            position: 'top-right',
          })}
        <ImageGallery images={images} />
        {loading && <Loader />}

        {!loading && images.length > 0 && total / 12 > page && (
          <Button onClick={this.handleLoadMoreBtn} />
        )}
      </Container>
    );
  }
}
export default App;
