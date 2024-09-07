import { Component } from '@angular/core';
import { questions } from './questions';
export interface IQuestions {
  question: string;
  answers: [string, number][];
}
interface IUser {
  email: string;
  reactionTime: number;
  userName: string;
}
enum views {
  quiz,
  reactionGame,
  email,
  gameOver,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'matt-app';
  submitted = false;
  currentView = views.email;
  username = '';
  views = views;
  email: string = '';
  score = 0;
  reactionTime: number | null = null;
  leaderboard: IUser[] = [];
  rank = 0;

  handleQuizCompleted(score: number) {
    this.score = score;
    this.currentView = views.reactionGame;
  }

  handleGameCompleted(time: number) {
    this.reactionTime = time;
    this.gameOver();
  }

  gameOver() {
    this.currentView = views.gameOver;
    this.sendToBackend();
  }

  onEmailSubmit() {
    this.currentView = views.quiz;
  }

  sendToBackend() {
    const data = {
      email: this.email,
      reactionTime: this.reactionTime,
      score: this.score,
      userName: this.username,
    };

    fetch('http://localhost:3000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error('Failed to send data');
        }
      })
      .then((data) => {
        console.log('Data sent successfully');
        this.leaderboard = data.topUsers;
        this.rank = data.rank;
        console.log(this.leaderboard);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
