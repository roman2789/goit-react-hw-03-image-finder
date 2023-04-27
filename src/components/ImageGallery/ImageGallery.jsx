import { Component } from 'react';
import { Gallery } from './ImageGalleryStyled';
import { Item } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <Gallery>
          {this.props.images &&
            this.props.images.map(image => (
              <Item key={image.id} image={image}>
                <img
                  loading="lazy"
                  alt={image.tags}
                  src={image.webformatURL}
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </Item>
            ))}
        </Gallery>
      </>
    );
  }
}
