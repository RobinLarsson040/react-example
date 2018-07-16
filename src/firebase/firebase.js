import * as firebase from 'firebase';

  let config = {
    apiKey: "AIzaSyDwCXTtSyCss0Qp9WD-JjjXCcqZqcEEhNo",
    authDomain: "order-tracking-react.firebaseapp.com",
    databaseURL: "https://order-tracking-react.firebaseio.com",
    projectId: "order-tracking-react",
    storageBucket: "",
    messagingSenderId: "30211586753"
  };
  firebase.initializeApp(config);

  export let database = firebase.database();


