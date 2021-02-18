import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../../models/photo/photo.model';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    return descriptionQuery && photos ?
      photos.filter(({ descriptionLowerCase }) => descriptionLowerCase.includes(descriptionQuery)) :
      photos;
  }
}
