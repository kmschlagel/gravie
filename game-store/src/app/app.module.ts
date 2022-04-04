import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HTTP_INTERCEPTORS,
  JsonpInterceptor,
} from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ComponentsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
