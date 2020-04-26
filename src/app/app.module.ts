import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TileComponent } from './components/tile/tile.component';
import { InfosComponent } from './components/infos/infos.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { LightboxEntryComponent } from './components/lightbox/lightbox-entry/lightbox-entry.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { DeferLoadDirective } from 'src/app/directives/defer-load.directive';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TileComponent,
    InfosComponent,
    LightboxComponent,
    LightboxEntryComponent,
    DeferLoadDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
