import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [NgFor]
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  console.log(hero)
  }

}
