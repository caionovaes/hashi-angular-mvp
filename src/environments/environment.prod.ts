export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCP8Yylqm_Kw6-mT0TDkFoyoTbtY7rpUwc',
    authDomain: 'hashi-b963d.firebaseapp.com',
    databaseURL: 'https://hashi-b963d.firebaseio.com',
    projectId: 'hashi-b963d',
    storageBucket: 'hashi-b963d.appspot.com',
    messagingSenderId: '933922103648',
    database: {
      rules: 'database.rules.json'
    },
    hosting: {
      public: 'public',
      rewrites: [
        {
          source: '**',
          destination: '/index.html'
        }
      ]
    }
  }
};
