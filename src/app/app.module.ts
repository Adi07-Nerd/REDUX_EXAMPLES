import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneChapterComponent } from './one-chapter/one-chapter.component';
import { MyStore } from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SecondChapterComponent } from './second-chapter/second-chapter.component';
import { SecondChapterModule } from './second-chapter/second-chapter.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/service/in-memory-data/in-memory-data.service';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OneChapterComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    SecondChapterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, {
    dataEncapsulation: false,
    passThruUnknownUrl: true,
    put204: false // return entity after PUT/update
    }
    ),
  ],
  providers: [MyStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
