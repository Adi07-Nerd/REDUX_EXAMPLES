import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home',loadChildren : () => import('./second-chapter/second-chapter.module').then( m => m.SecondChapterModule)},
  { path:'third',loadChildren : () => import('./third-chapter/third-chapter.module').then( m => m.ThirdChapterModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
