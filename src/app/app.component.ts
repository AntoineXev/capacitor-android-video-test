import {Component} from '@angular/core';
import { Plugins } from '@capacitor/core';
import { VideoRecorderCamera, VideoRecorderPreviewFrame, VideoRecorder } from '@teamhive/capacitor-video-recorder';

const ratioWidth = 9;
const ratioHeight = 16;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public videoRecorderLaunched = false;
  videoRecorderOptions: VideoRecorderPreviewFrame = {
    id: 'video-record',
    stackPosition: 'back',
    width: window.screen.width / ratioWidth > window.screen.height / ratioHeight ? Math.floor(window.screen.height / ratioHeight * ratioWidth) : window.screen.width,
    height: window.screen.height / ratioHeight > window.screen.width / ratioWidth ? Math.floor(window.screen.width / ratioWidth * ratioHeight) : window.screen.height,
    x: 0,
    y: 0,
    borderRadius: 0
  };

  constructor(
          ) {
  }

  recordVideo() {
    this.videoRecorderLaunched = true;
    VideoRecorder.initialize({
      camera: VideoRecorderCamera.BACK,
      previewFrames: [this.videoRecorderOptions]
    }).then(_ => {
      console.log("preview")
    })
  }
}