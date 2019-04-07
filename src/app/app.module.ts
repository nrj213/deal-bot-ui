import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';
import { TrackedComponent } from './pages/tracked/tracked.component';
import { SearchResultComponent } from './pages/search/search-result/search-result.component';

import { ItemService } from './services/item.service';
import { FlipkartService } from './services/flipkart.service';
import { ToasterService } from 'angular2-toaster';
import { DataService } from './services/data.service';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/auth/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    TrackedComponent,
    SearchResultComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    FlipkartService, 
    ItemService,
    ToasterService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
