// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    year: new Date().getFullYear(),
    firebase: {
        apiKey: 'AIzaSyA8Kb5p9GwqVwgjnG2Q_zYBmc5z6vjkdYE',
        authDomain: 'sds2018-dev.firebaseapp.com',
        databaseURL: 'https://sds2018-dev.firebaseio.com',
        projectId: 'sds2018-dev',
        storageBucket: 'sds2018-dev.appspot.com',
        messagingSenderId: '1069468573972'
    }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
