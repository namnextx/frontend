import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input()
  dataQuestion: boolean;
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  check = true;

  constructor() {
  }

  ngOnInit() {
    this.reload();
  }

  play() {
    if (this.dataQuestion === true) {
      this.playPause();
    }
  }

  reload() {
    this.dataQuestion = true;
  }

  playPause() {
    if (this.check) {
      this.videoPlayer.nativeElement.play();
      setTimeout(() => {
        this.pause();
      }, 3000);
    }
    this.dataQuestion = false;
  }

  pause() {
    this.videoPlayer.nativeElement.pause();
  }

}
