import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  public countryName: any
  public country: any;
  objectKeys = Object.keys;
  
  constructor(private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.countryName = params.get('name');
    });
    this.countryService.getCountryByName(this.countryName).then((data) => {
      this.country = data;
    })
    .catch((err) => console.log(err));
  }
 
}
