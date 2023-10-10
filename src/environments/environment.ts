// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'ionic-angular-notification',
    appId: '1:705481873573:web:583fcc36bc92a4486a954c',
    databaseURL: 'https://ionic-angular-notification-default-rtdb.asia-southeast1.firebasedatabase.app',
    storageBucket: 'ionic-angular-notification.appspot.com',
    apiKey: 'AIzaSyBjK1BpzrPKnh7TsyUnigYEy-GqQf_6iDc',
    authDomain: 'ionic-angular-notification.firebaseapp.com',
    messagingSenderId: '705481873573',
    measurementId: 'G-S928MJCBDP',
  },
  production: false,
  mapbox: {
      accessToken: 'pk.eyJ1Ijoib3J0ZWdhY2FuaWxsbzc2IiwiYSI6ImNsbmR1c3FmZDBiYTUybG9odWR5M2w0OHAifQ.efz0G8TJnvKFn9JPY7W9Yg',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 12,
      center: {
          lng: 123.899856,
          lat: 10.321017
      },
      pitch: 0,
      bearing: 0,
      antialias: true,
      attribution: true,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
