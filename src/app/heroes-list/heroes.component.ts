import { Component , OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterModule, Router }   from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//OnInit get the hero data when the AppComponent activates.
export class HeroesComponent implements OnInit {

  //Heroes Array
  heroes: Hero[];
  //Hero for Details
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
