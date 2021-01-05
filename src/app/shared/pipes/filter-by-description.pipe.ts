import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from '../models/photo/photo.model';

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform{
    
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        return descriptionQuery !== '' && descriptionQuery !== undefined  && photos.length > 0 ? 
            photos.filter(({descriptionLowerCase}) => descriptionLowerCase.includes(descriptionQuery)) :
            photos;
    }
}