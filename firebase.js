import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCxxZ1lxyFfl3dtpfoA7N8zZxKDnr8LkJY",
    authDomain: "docs-da381.firebaseapp.com",
    projectId: "docs-da381",
    storageBucket: "docs-da381.appspot.com",
    messagingSenderId: "581193656628",
    appId: "1:581193656628:web:77218fee86086eb92c5d61"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();

export {db};

