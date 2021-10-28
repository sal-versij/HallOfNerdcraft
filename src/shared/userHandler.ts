import {
	getAuth,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
} from 'firebase/auth';

export function bindAuthState(callack) {
	const auth = getAuth();
	onAuthStateChanged(auth, callack);
}

export function loginPopup() {
	const auth = getAuth();
	auth.languageCode = 'it';
	const provider = new GoogleAuthProvider();
	// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

	signInWithPopup(auth, provider)
		.then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// TODO: ...
		})
		.catch(error => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// TODO: ...
		});
}

export function signout() {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			// TODO: Sign-out successful.
		})
		.catch(error => {
			// TODO: An error happened.
		});
}
