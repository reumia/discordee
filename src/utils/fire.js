import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBtZ0nnmpB1GYZpWeE4Ko1bvNeHtXGtnVE",
    authDomain: "discordee-dd480.firebaseapp.com",
    databaseURL: "https://discordee-dd480.firebaseio.com",
    projectId: "discordee-dd480",
    storageBucket: "discordee-dd480.appspot.com",
    messagingSenderId: "963322228015"
};

const fire = firebase.initializeApp(config);

export default fire;