import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChapterComponent } from './second-chapter/second-chapter.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home',loadChildren : () => import('./second-chapter/second-chapter.module').then( m => m.SecondChapterModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
