import { GalleryItem } from './ImageGalleryItemStyled';

export const Item = ({ children }) => {
  return <GalleryItem className="gallery-item">{children}</GalleryItem>;
};
