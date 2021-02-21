import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotosContainersModule } from './photos/containers/photos.containers.module';
import { ErrorsModule } from './errors/errors.module';
import { AuthContainerModule } from './auth/containers/auth.containers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosContainersModule,
    AuthContainerModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
