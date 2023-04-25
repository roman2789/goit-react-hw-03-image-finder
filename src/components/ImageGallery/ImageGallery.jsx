import { Gallery } from './ImageGalleryStyled';
export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <Gallery>
      {images &&
        images.map(image => (
          <li key={image.id} className="gallery-item">
            <img src={image.userImageURL} alt="" />
          </li>
        ))}
    </Gallery>
  );
};
