import { initializeApp } from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDvtoTdssFupnQeckUaFRODzQ25_WyxJwQ',
	authDomain: 'hall-of-nerdcraft.firebaseapp.com',
	projectId: 'hall-of-nerdcraft',
	storageBucket: 'hall-of-nerdcraft.appspot.com',
	messagingSenderId: '284171263870',
	appId: '1:284171263870:web:1a077f673091d2acbf9d2f',
};
// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const db = firebase.firestore();

const app = initializeApp(firebaseConfig);
