import  * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZT2kB1Bu9Mvdmu5R99xXsjpSrH8gdaOA",
    authDomain: "expensify-a242d.firebaseapp.com",
    databaseURL: "https://expensify-a242d.firebaseio.com",
    projectId: "expensify-a242d",
    storageBucket: "expensify-a242d.appspot.com",
    messagingSenderId: "1082248607596"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };


  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 109500,
  //   createdAt: 9755563152
  // });

  // database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // });

  // database.ref()
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // }).catch((e) => {
  //   console.log('Error getting data', e);
  // });

  // database.ref().set({
  //   name: 'Rickey Lee',
  //   age: 27,
  //   job: 'Software Dev',
  //   location: {
  //     city: 'Philadelphia',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((e) => {
  //   console.log('This failed', e);
  // });
  //
  // database.ref().update({
  //   job: 'Manager',
  //   'location/city': 'Boston'
  // });

  // database.ref()
  // .remove()
  // .then(() => {
  //   console.log('Data was removed');
  // }).catch((e) => {
  //   console.log('Didn not remove', e);
  // });
