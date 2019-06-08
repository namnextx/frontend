import {Component, NgModule, OnInit} from '@angular/core';
import {IQuestion} from '../model/question';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../service/question.service';
import {AppComponent} from '../app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  listQuestion: IQuestion;
  formQuestion: FormGroup;
  answer: string;

  constructor(
    private activeRouter: ActivatedRoute,
    private questionService: QuestionService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {

    this.formQuestion = this.fb.group(
      {
        answer: ''
      }
    );

    this.questionService.getListQuestion().then(list =>
      this.listQuestion = list);
  }

  onSubmit() {
    alert(JSON.stringify(this.formQuestion.value));
  }
}
