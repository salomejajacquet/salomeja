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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TileComponent,
    InfosComponent,
    LightboxComponent,
    LightboxEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
