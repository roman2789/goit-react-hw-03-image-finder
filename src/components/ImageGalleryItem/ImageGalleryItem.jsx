import { GalleryItem, ItemRef } from './ImageGalleryItemStyled';

export const Item = ({ onClick, children }) => {
  return (
    <GalleryItem>
      <ItemRef onClick={onClick}>{children}</ItemRef>
    </GalleryItem>
  );
};
