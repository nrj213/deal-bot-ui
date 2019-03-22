import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';
import { TrackedComponent } from './pages/tracked/tracked.component';
import { SearchResultComponent } from './pages/search/search-result/search-result.component';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    TrackedComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
