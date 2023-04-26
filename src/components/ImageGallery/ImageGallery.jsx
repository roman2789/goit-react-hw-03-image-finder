import { Component } from 'react';
import { Gallery } from './ImageGalleryStyled';
import { Item } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImageApi';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps) {
    const query = this.props.query;
    const page = this.state.page;
    if (prevProps.query !== query) {
      this.setState({ loading: true });
      this.setState({ images: [] });
      getImages(query, page)
        .then(imagesData =>
          this.setState(prevState => ({
            images: [...prevState.images, ...imagesData],
          }))
        )
        .catch(error =>
          this.setState({ error: 'Щось пішло не так. Спробуйте ще!' })
        )
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleLoadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('kzdjnb');
  };

  deleteImageGallery = () => {
    this.setState({ images: [] });
  };
  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <Gallery>
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.images &&
            this.state.images.map(image => (
              <Item key={image.id} onClick={this.props.onClick}>
                <img
                  src={image.webformatURL}
                  alt=""
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </Item>
            ))}
        </Gallery>
        {this.state.images.length > 0 && (
          <Button onClick={this.handleLoadMoreBtn} />
        )}
      </>
    );
  }
}
