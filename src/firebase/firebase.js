import firebase from 'firebase'

var config = {
    apiKey: `${process.env.API_KEY}`
  };
  firebase.initializeApp(config);

const auth = firebase.auth()
const provider = new firebase.auth.FacebookAuthProvider();

export { firebase, auth, provider }
