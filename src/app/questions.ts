import { IQuestions } from './app.component';

export const questions: IQuestions[] = [
  {
    question: 'What is the purpose of your visit to COMTEQ?',
    answers: [
      ["I'm seeking to meet like minded companies we can collaborate with", 10],
      ['Seeing what the competition is up to', 7],
      ["On a 'jolly' beats working", 3],
    ],
  },
  {
    question: 'How do you see Enterprise Architecture?',
    answers: [
      ['We believe it supports our business objectives', 10],
      ['I don’t see us as Enterprise', 7],
      ['Is that something to do with Star Trek', 3],
    ],
  },
  {
    question: 'How do you see your customers?',
    answers: [
      ['We prefer to think of them as partners', 10],
      ['Without them we do not exist', 7],
      ["I'm scared to walk out the door or answer the phone", 3],
    ],
  },
  {
    question: 'How do you manage changing customer demands?',
    answers: [
      ['We are experts in our business and collaborate where we are not', 10],
      ['We avoid change it takes a long time to recover', 7],
      ["If it ain't broke don’t fix it", 3],
    ],
  },
  {
    question: 'Have you heard of Vanishing Point Architecture?',
    answers: [
      ['No… sounds intriguing', 10],
      ['No… sounds intriguing', 9],
      ['No… sounds intriguing', 8],
    ],
  },
];
