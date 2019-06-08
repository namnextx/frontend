export interface IQuestion {
  id: number;
  contain: string;
  result: string;
  answer: IAnswer;
}

export interface IAnswer {
  id: number;
  result: string;
}
