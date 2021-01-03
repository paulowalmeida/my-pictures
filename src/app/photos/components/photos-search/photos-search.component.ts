import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-photos-search',
  templateUrl: 'photos-search.component.html',
})
export class PhotosSearchComponent implements OnInit, OnDestroy {
  @Input()
  value = '';

  @Output()
  onTyping: EventEmitter<string> = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.debounce
    .pipe( debounceTime(400)) 
    .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(){
      this.debounce.unsubscribe();
  }
}
