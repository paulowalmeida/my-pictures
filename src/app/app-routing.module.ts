import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/containers/photo-form/photo-form.component';
import { PhotoGaleryComponent } from './photos/containers/photo-galery/photo-galery.component';
import { NotFoundComponent } from './errors/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'user/:userName',
    component: PhotoGaleryComponent
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
