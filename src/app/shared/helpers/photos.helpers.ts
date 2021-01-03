import { Photo } from '../models/photo/photo.model';

export const includeToLowerCaseIn = (photos: Photo[]) => {
  photos.forEach((photo) => {
    photo.descriptionLowerCase = photo.description.toLocaleLowerCase();
  });
  return photos;
};
