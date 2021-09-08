import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  { path: '', component: CountriesListComponent },
  { path: 'country/:name', component: CountryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
