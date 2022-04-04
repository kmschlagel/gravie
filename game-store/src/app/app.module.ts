import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HTTP_INTERCEPTORS,
  JsonpInterceptor,
} from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { GamesStoreState } from './states/game-store.state.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot([GamesStoreState], { developmentMode: true }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ComponentsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
