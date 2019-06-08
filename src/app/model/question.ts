export interface IQuestion {
  id: number;
  content: string;
  result: string;
  answer: IAnswer;
}

export interface IAnswer {
  id: number;
  result: string;
}
