import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  newGame = new Game();
  constructor(private gameService: GameService,private router :Router,) { }

  ngOnInit(): void {
  }
  addGame(){
    //console.log(this.newGame);
    this.gameService.ajouterGame(this.newGame);
    this.router.navigate(['games']);
    }
}
