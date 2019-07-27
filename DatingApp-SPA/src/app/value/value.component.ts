import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(
      'http://localhost:5000/api/values'
    ).
    subscribe(
      data => {
        // console.log(data);
        this.values = data;
      }, error => {
        console.log(error);
      }
    );
  }
}
