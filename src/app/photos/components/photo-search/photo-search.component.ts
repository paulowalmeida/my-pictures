import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: ['./photo-search.component.scss']
})
export class PhotoSearchComponent implements OnInit {

  @Input()
  value = '';

  @Output()
  onFiltered = new EventEmitter<string>();

  @Output()
  onClearFilter = new EventEmitter<void>();

  debounce: Subject<string> = new Subject<string>();

  formGroup: FormGroup;

  constructor(
    readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.debounce
      .pipe(
        debounceTime(400)
      )
      .subscribe(filter => {
        if(filter === ''){
          console.log('filtro limpo: ', filter);
          this.onClearFilter.emit();
        }
        this.onFiltered.emit(filter);
      });
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      filter: new FormControl('')
    });
  }

  onChanges() {
    this.formGroup.valueChanges.subscribe(value =>
      this.debounce.next(value)
    )
  }

}
