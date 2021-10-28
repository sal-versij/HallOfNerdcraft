<script lang="ts">
	import Layout from './shared/_layout.svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	function loadCitations() {
		return fetch('citations.json').then(Response => Response.json());
	}
	function formatTimestamp(timestamp) {
		var a = new Date(timestamp);
		return `${a.toLocaleDateString('it-IT', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})} ${a.toLocaleTimeString('it-IT', {
			hour: '2-digit',
			minute: '2-digit',
		})}`;
	}

	let promise = loadCitations();
</script>

<Layout>
	<div class="container text-white">
		<div class="row">
			<div class="col">
				{#await promise}
					<div
						class="d-flex align-items-center justify-content-center"
					>
						<div
							class="spinner-grow text-light me-2"
							role="status"
						/>
						<strong>Loading...</strong>
					</div>
				{:then repository}
					{#each repository.citations as { timestamp, image, quote, cit, location }, i (i)}
						<div class="card bg-dark mb-3" animate:flip in:fade>
							<div class="card-body d-flex">
								<div class="flex-shrink-0">
									{#if image}
										<img src={image} alt="citation" />
									{/if}
								</div>
								<div class="flex-grow-1 ms-3">
									<figure>
										<blockquote class="blockquote">
											<p>
												{quote}
											</p>
										</blockquote>
										{#if cit}
											<figcaption
												class="blockquote-footer"
											>
												<cite title={cit}>{cit}</cite>
												{formatTimestamp(timestamp)}
												{location}
											</figcaption>
										{/if}
									</figure>
									<blockquote />
								</div>
							</div>
						</div>
					{/each}
				{:catch error}
					<div class="alert alert-danger">{error.message}</div>
				{/await}
			</div>
		</div>
	</div>
</Layout>

<style lang="scss">
</style>
