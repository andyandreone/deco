import firebase from "firebase/app";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCLgSQuNepKbWbLvoJA7Izfs1Vox6t5ej0",
  authDomain: "decocayetana-bcc21.firebaseapp.com",
  projectId: "decocayetana-bcc21",
  storageBucket: "decocayetana-bcc21.appspot.com",
  messagingSenderId: "270286294858",
  appId: "1:270286294858:web:2fdd3b939ae1c0384ebbb3",
});

export function getFirebase() {
  return app;
}
export function getFireStore() {
  return firebase.firestore(app);
}
