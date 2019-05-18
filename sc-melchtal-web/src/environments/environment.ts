// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  galleryBaseUrl: 'http://localhost:4201/',
  contentfulApiKey: '076973e49c190bc4fa3a8dea02b3ee08a223f4166ba8de1ba5456bea6e42df86',
  firebase: {
    apiKey: 'AIzaSyBh_orBNKu-ZnIPAe8cHOmmVXLx_rhSz4E',
    authDomain: 'sc-melchtal-web.firebaseapp.com',
    databaseURL: 'https://sc-melchtal-web.firebaseio.com',
    projectId: 'sc-melchtal-web',
    storageBucket: 'sc-melchtal-web.appspot.com',
    messagingSenderId: '764869375335',
    appId: '1:764869375335:web:a2a7a6b1dc0d353a'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
