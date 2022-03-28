import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StateModule } from './state/state.module';
import { CoreModule } from './core/core.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserReducer } from './state/user/user.reducers';
import { UserService } from './core/services/user.service';

const userModule = StoreModule.forFeature('user', UserReducer);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    userModule,
    StateModule.forRoot(),
    CoreModule.forRoot(),
  ],
  providers: [
    StatusBar,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
