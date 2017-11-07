import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//The @Injectable() decorator tells Angular that this service might itself have injected dependencies. 
@Injectable()
export class HeroService {
  
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }

}
