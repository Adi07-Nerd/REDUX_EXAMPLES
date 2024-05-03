import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { FuzzyPipe } from '../shared/pipes/fuzzy.pipe';




@NgModule({
  declarations: [
    ListComponent,
    FuzzyPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatIconModule,
    MatListModule,
    FormsModule   
  ],
  providers:[]
})
export class ListModule { }
