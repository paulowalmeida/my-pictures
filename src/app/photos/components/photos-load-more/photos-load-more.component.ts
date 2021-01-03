import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:'app-photos-load-more',
    templateUrl: 'photos-load-more.component.html'
})
export class PhotosLoadMoreComponent implements OnInit{

    @Input() hasMore:boolean = false;

    constructor(){}

    ngOnInit(): void {
    }
}