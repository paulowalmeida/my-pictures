import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormContainerComponent } from './photos/containers/photo-form/photo-form-container.component';
import { PhotoGaleryContainerComponent } from './photos/containers/photo-galery/photo-galery-container.component';
import { NotFoundComponent } from './errors/components/not-found/not-found.component';
import { PhotoListResolverService } from './shared/resolvers/photo-list/photo-list.resolver.service';

const routes: Routes = [
  {
    path: 'user/:username',
    component: PhotoGaleryContainerComponent,
    resolve: {
      photos: PhotoListResolverService
    }
  },
  {
    path: 'p/add',
    component: PhotoFormContainerComponent,
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
