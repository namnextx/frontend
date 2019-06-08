import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {VideoComponent} from './video/video.component';
import {StatusService} from './service/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild(VideoComponent) child: VideoComponent;
  title = 'frontend';
  msg = false;

  receigeveMsg($event) {
    this.msg = $event;
  }

  talkBack($event) {
    this.msg = $event;

  }

  ngAfterViewInit(): void {
    this.msg = this.child.dataQuestion;
  }

  constructor(private statusService: StatusService) {
  }

  ngOnInit(): void {
    this.statusService.currentStatus.subscribe( status => this.msg = status);

  }


}
