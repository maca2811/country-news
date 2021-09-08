import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  public countries: any;
  objectKeys = Object.keys;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.getCountries().then((data) => {
      this.countries = data;
    })
    .catch((err) => console.log(err));
  }

  getCountries(): any {
    this.countryService
      .getCountries()
      .then((data) => {
        this.countries = data;
      })
      .catch((err) => console.log(err));
  }
}
