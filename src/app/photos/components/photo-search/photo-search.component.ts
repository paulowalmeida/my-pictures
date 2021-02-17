import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: ['./photo-search.component.scss']
})
export class PhotoSearchComponent implements OnInit {

  @Input()
  value = '';

  @Output()
  onTyping: EventEmitter<string> = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(400))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
