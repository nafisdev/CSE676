  import { Component, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  apiUrl = 'http://your-api-endpoint.com/predict'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }
  showAdditionalContainer = false;

  ngOnInit(): void {
  }

  gen() {
    this.showAdditionalContainer = true;
  }

  reset() {
    this.showAdditionalContainer = false;
  }


}
