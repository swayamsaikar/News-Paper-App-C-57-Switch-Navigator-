import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCVTf8ULwJLJXs8FY05jQur1FPdkxua6FA",
    authDomain: "trail-project-4-92055.firebaseapp.com",
    databaseURL: "https://trail-project-4-92055-default-rtdb.firebaseio.com",
    projectId: "trail-project-4-92055",
    storageBucket: "trail-project-4-92055.appspot.com",
    messagingSenderId: "168375305714",
    appId: "1:168375305714:web:e76d6b602ea3c88d64976b"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.database();