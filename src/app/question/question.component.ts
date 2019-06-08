import { Component, OnInit } from '@angular/core';
import {IQuestion} from '../model/question';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  listQuestion: IQuestion;
  formQuestion: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
