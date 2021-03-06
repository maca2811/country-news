import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryService } from './services/country.service';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
