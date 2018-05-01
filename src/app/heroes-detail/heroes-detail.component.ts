import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../model/heroes";

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  @Input() hero : Hero;

  constructor() { }

  ngOnInit() {
  }

}
