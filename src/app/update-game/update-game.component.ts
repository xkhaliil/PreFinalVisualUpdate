import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../model/game.model';


@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styles: [
  ]
})
export class UpdateGameComponent implements OnInit {
  currentGame = new Game();
  constructor(
  private activatedRoute: ActivatedRoute,
  private router :Router,
  private gameService: GameService) 
  { }
  
  ngOnInit() {
  this.currentGame = this.gameService.consulterGame(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentGame);
  }
  updategame()
  { 
  this.gameService.updateGame(this.currentGame);
  this.router.navigate(['games']);
  }
}
