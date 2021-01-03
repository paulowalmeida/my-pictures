import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Pictures';
  photos$: Observable<any[]>;

  constructor(private httpClient: HttpClient) {
    const url = `${environment.URL_API}/flavio/photos`;
    this.photos$ = httpClient.get<any[]>(url);
  }
}
