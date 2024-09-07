import { Component, Output, EventEmitter } from '@angular/core';
import { questions } from 'src/app/questions';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  @Output() quizCompleted = new EventEmitter<number>();
  score = 0;
  questions = questions;

  currentQuestionIndex: number | undefined = undefined;
  questionAnswers = new Map<number, number>();

  onAnswerClick(index: number, score: number) {
    this.questionAnswers.set(index, score);
  }

  previousQuestion() {
    if (this.currentQuestionIndex === undefined) {
      return;
    }
    if (this.currentQuestionIndex <= 0) {
    } else {
      this.currentQuestionIndex--;
    }
  }

  submitt() {
    this.score = 0;
    this.questionAnswers.forEach((value, key) => {
      this.score += value;
    });
    this.quizCompleted.emit(this.score);
  }

  nextQuestion() {
    if (this.currentQuestionIndex === undefined) {
      return;
    }
    if (this.currentQuestionIndex >= this.questions.length - 1) {
      this.submitt();
    } else {
      this.currentQuestionIndex++;
    }
  }

  checkAnswerExists(index: number, score: number) {
    return (
      this.questionAnswers.has(index) &&
      this.questionAnswers.get(index) === score
    );
  }

  startQuiz() {
    this.currentQuestionIndex = 0;
  }
}
