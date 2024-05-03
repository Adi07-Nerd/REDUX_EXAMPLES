import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChapterComponent } from './second-chapter/second-chapter.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home',loadChildren : () => import('./second-chapter/second-chapter.module').then( m => m.SecondChapterModule)},
  { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'edit/:bookmarkId', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
