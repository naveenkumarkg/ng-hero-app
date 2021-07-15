import { Component, OnInit } from '@angular/core';
import { Hero, } from './hero';
// import { HEROES } from './mock-heroes';
import { HeroseriveService } from '../heroserive.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Mega Star'

  Heroes: Hero[] = [];
  selectedHeroes?: Hero;

  constructor(private heroSerivce: HeroseriveService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.heroSerivce.getHeroes().subscribe((data) => {
      this.Heroes = data;
    });
  }

  getSelectedData(hero: any) {
    console.log(hero)
    this.selectedHeroes = hero
  }
}
