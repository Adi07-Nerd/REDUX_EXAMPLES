import { NgModule, isDevMode } from '@angular/core';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SecondChapterModule } from './second-chapter/second-chapter.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/service/in-memory-data/in-memory-data.service';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, metaReducers } from './store/index';
import * as bookmarkIndex from '../app/store/bookmark/index';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './store/router/router.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterSerializer } from './store/router/router.serializer';


@NgModule({
  declarations: [
    AppComponent,
    OneChapterComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    SecondChapterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, {
    dataEncapsulation: false,
    passThruUnknownUrl: true,
    put204: false // return entity after PUT/update
    }
    ),
    StoreModule.forRoot(ROOT_REDUCERS,{metaReducers}),
    // StoreModule.forFeature('bookmarks',bookmarkIndex.reducers),
    StoreModule.forFeature(bookmarkIndex.bookmarksFeatureKey,bookmarkIndex.reducers),
    StoreDevtoolsModule.instrument({
      logOnly:true,
      trace:true
    }),
    EffectsModule.forRoot([RouterEffects]),
    /**
     * stateKey is the second object if which take 'router' key for router state by default but
     * if u have other name then router in your application state speicified it in the stateKey
     */
    StoreRouterConnectingModule.forRoot({serializer : CustomRouterSerializer}),
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [MyStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
