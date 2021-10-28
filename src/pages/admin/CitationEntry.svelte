<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
	import Swal from 'sweetalert2';

	export let id;
	export let citation;

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

	async function deleteEntry() {
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		});

		if (result.isConfirmed) {
			await Swal.fire('Deleted!', 'Citation deleted.', 'success');
		} else {
			await Swal.fire('Cancelled!', 'Nothing has been touched.', 'error');
		}
	}
</script>

<div class="card bg-dark mb-3">
	<div class="card-body d-flex">
		<div class="flex-shrink-0">
			{#if citation.image}
				<img src={citation.image} alt="citation" />
			{/if}
		</div>
		<div class="flex-grow-1 ms-3">
			<figure>
				<blockquote class="blockquote">
					<p>
						{citation.quote}
					</p>
				</blockquote>
				{#if citation.cit}
					<figcaption class="blockquote-footer">
						<cite title={citation.cit}>{citation.cit}</cite>
						{(citation.timestamp &&
							formatTimestamp(citation.timestamp)) ||
							citation.when ||
							''}
						{citation.location || ''}
					</figcaption>
				{/if}
			</figure>
		</div>
		<div class="flex-srink">
			<div class="btn-toolbar">
				<a
					class="btn btn-success btn-sm mx-1 rounded-pill"
					href="/console/citation/{id}/edit"
				>
					<Fa icon={faEdit} />
				</a>
				<button
					type="button"
					class="btn btn-danger btn-sm mx-1 rounded-pill"
					on:click={deleteEntry}
				>
					<Fa icon={faTrash} />
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	figure {
		border-left: 4px solid white;
		padding-left: 8px;
		margin: 0;
		figcaption {
			margin-bottom: 0;
		}
	}
</style>
