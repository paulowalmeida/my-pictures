import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/containers/photo-form/photo-form.component';
import { PhotoGaleryComponent } from './photos/containers/photo-galery/photo-galery.component';
import { NotFoundComponent } from './errors/components/not-found/not-found.component';
import { PhotoListResolverService } from './shared/resolvers/photo-list/photo-list.resolver.service';

const routes: Routes = [
  {
    path: 'user/:username',
    component: PhotoGaleryComponent,
    resolve: {
      photos: PhotoListResolverService
    }
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
