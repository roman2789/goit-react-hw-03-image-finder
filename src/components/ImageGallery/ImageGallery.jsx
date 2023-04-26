import { Component } from 'react';
import { Gallery } from './ImageGalleryStyled';
export class ImageGallery extends Component {
  state = {
    images: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      fetch(
        `https://pixabay.com/api/?key=29463027-4abcfc2db99f2732a8383a5f8&q=${this.props.query}&page=1&per_page=12`
      )
        .then(response => response.json())
        .then(imagesData =>
          this.setState({
            images: imagesData.hits,
          })
        );
    }
  }
  render() {
    return (
      <Gallery>
        {this.state.images &&
          this.state.images.map(image => (
            <li key={image.id} className="gallery-item">
              <img src={image.userImageURL} alt="" />
            </li>
          ))}
      </Gallery>
    );
  }
}
