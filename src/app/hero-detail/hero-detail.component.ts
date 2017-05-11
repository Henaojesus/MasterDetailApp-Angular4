import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Hero } from '../hero';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
  this.route.params
    //The switchMap operator maps the id in the Observable route parameters to a new Observable
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
    }
  //Navigates backward one step in the browser's history
  goBack(): void {
    this.location.back();
  }
}
