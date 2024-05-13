import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit.component';
import { EditGuard } from './edit.guard';

const routes: Routes = [{ path: '', component: EditComponent,canActivate:[EditGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
