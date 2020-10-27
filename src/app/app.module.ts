import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducers } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MobileEffects } from './store/effects/mobile.effects';
import { environment } from 'src/environments/environment.prod';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, DefaultRouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AboutComponent } from './about/about.component';
import { InterestsComponent } from './interests/interests.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InterestsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([MobileEffects]),
    StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer, stateKey: 'router'}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    //in-memory pass thru
    // HttpClientInMemoryWebApiModule.forRoot(INMEMORYSERVICEHERE, {
    //   passThruUnknownUrl: true
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
