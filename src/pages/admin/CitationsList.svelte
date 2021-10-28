<script lang="ts">
	import CitationEntry from './CitationEntry.svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { ref, child, get, getDatabase } from 'firebase/database';

	const dbRef = ref(getDatabase());

	function loadCitations() {
		return get(child(dbRef, `citations/`)).then(snapshot => {
			if (snapshot.exists()) {
				return snapshot.val();
			} else {
				throw new Error('No data found');
			}
		});
	}

	let promise = loadCitations();
</script>

<div class="list-group">
	{#await promise}
		<div class="d-flex align-items-center justify-content-center">
			<div class="spinner-grow text-light me-2" role="status" />
			<strong>Loading...</strong>
		</div>
	{:then citations}
		{#each citations as citation, id (id)}
			<div animate:flip in:fade>
				<CitationEntry {citation} {id} />
			</div>
		{/each}
	{:catch error}
		<div class="alert alert-danger">{error.message}</div>
	{/await}
</div>
