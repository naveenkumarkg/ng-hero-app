import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero';
import {HEROES} from './heroes/mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroseriveService {

  constructor() { }

  getHeroes():Observable<Hero[]>{
const heroes = of(HEROES)
    return heroes;
  }
}
