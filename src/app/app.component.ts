import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FcmService } from './services/fcm/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private fcm: FcmService
  ) {
    this.platform.ready()
    .then(() => {
      console.log('platform ready');
    })
    .catch(err => console.log(err));
  }
}
