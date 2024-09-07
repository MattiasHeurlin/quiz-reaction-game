import { Component, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-reaction-game',
  templateUrl: './reaction-game.component.html',
  styleUrls: ['./reaction-game.component.css'],
})
export class ReactionGameComponent {
  lights = Array(5).fill('grey'); // Lights initialized to grey
  @Output() gameCompleted = new EventEmitter<number>();
  reactionTime: number | null = null;
  gameActive: boolean = false;
  errorMessage: string = '';
  isGreen: boolean = false;
  private lightTimeouts: any[] = [];
  private greenLightTime!: number;
  private subject = new Subject<string | number>();

  startGame() {
    this.gameActive = true;
    this.errorMessage = '';

    let delay = 1000;

    this.lightTimeouts = Array(5)
      .fill(null)
      .map((_, index) => {
        return setTimeout(() => {
          this.lights[index] = 'red';
        }, delay * (index + 1));
      });

    const randomGreenDelay = delay * 5 + Math.random() * 4000 + 1000;
    this.lightTimeouts.push(
      setTimeout(() => {
        this.greenLightTime = Date.now();
        this.lights.fill('green');
        this.isGreen = true;
      }, randomGreenDelay)
    );
  }

  lightClicked() {
    if (!this.gameActive) {
      return;
    }
    if (!this.isGreen) {
      this.errorMessage = 'Too early! Jump start detected.';
      this.endGame();
      return;
    }
    this.reactionTime = Date.now() - this.greenLightTime;
    this.endGame();
  }

  resetGame() {
    this.lights.fill('grey');
    this.reactionTime = null;
    this.errorMessage = '';
    this.isGreen = false;
    this.lightTimeouts.forEach((timeout) => clearTimeout(timeout));
  }

  endGame() {
    this.gameActive = false;
    this.lightTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.gameCompleted.emit(this.reactionTime!);
  }
}
