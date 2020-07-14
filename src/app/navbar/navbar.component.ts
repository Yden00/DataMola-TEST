import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ELEMENT_DATA } from '../../assets/dataSource';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public name = new FormControl('');
  public genre = new FormControl('');
  public year = new FormControl('');

  public genres = [
    "drama",
    "horror",
    "crime",
    "dark comedy",
    "tragedy",
  ]
  public years = [
    "05.11.2019",
    "01.01.2019",
    "20.10.2019"
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
