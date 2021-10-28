import App from './App.svelte';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDvtoTdssFupnQeckUaFRODzQ25_WyxJwQ',
	authDomain: 'hall-of-nerdcraft.firebaseapp.com',
	databaseURL: 'https://hall-of-nerdcraft-default-rtdb.firebaseio.com/',
	storageBucket: 'hall-of-nerdcraft.appspot.com',
};

const firebaseApp = initializeApp(firebaseConfig);

const app = new App({
	target: document.body,
	props: {
		firebaseApp,
	},
});

export default app;
