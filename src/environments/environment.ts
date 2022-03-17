// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //Configuración firebase

  firebaseConfig: {
    projectId: 'scancam-ccb9d',
    appId: '1:511122520520:web:ca7ab32b5f7777d92a68fd',
    databaseURL: 'https://scancam-ccb9d-default-rtdb.firebaseio.com',
    storageBucket: 'scancam-ccb9d.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBhE0UHryF33SuQJqUBQEksyIcr-Rz5VjE',
    authDomain: 'scancam-ccb9d.firebaseapp.com',
    messagingSenderId: '511122520520',
    measurementId: 'G-S669TTJKYR',
  },

  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
