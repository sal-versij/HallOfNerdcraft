<script lang="ts">
	import Layout from '../../shared/_layout.svelte';
	import CitationsList from './CitationsList.svelte';

	let citation: {
		cit: string;
		location: string;
		quote: string;
		timestamp: string;
		when: string;
	} = {
		cit: undefined,
		location: undefined,
		quote: undefined,
		timestamp: undefined,
		when: undefined,
	};
</script>

<Layout>
	<div class="container bg-dark text-white py-3">
		<div class="row">
			<div class="col-12 form-group mb-2">
				<label for="inputQuote" class="fw-bold">Citazione</label>
				<textarea class="form-control" id="inputQuote" required />
				<div class="invalid-feedback">
					Compilare questo campo prima di proseguire
				</div>
			</div>
			<div class="col-12 form-group mb-2">
				<label for="inputCit" class="fw-bold">Citazione di</label>
				<input
					type="text"
					class="form-control"
					id="inputCit"
					placeholder="@fulippo"
					required
				/>
				<div class="invalid-feedback">
					Compilare questo campo prima di proseguire
				</div>
			</div>
			<div class="col-md-4 form-group mb-2">
				<label for="inputTimestamp" class="fw-bold">Timestamp</label>
				<input
					type="text"
					class="form-control"
					id="inputTimestamp"
					placeholder="yyyy-mm-ddThh:mm:ss+xxxx"
				/>
			</div>
			<div class="col-md-4 form-group mb-2">
				<label for="inputWhen" class="fw-bold">Quando</label>
				<input
					type="text"
					class="form-control"
					id="inputWhen"
					placeholder="..."
				/>
			</div>
			<div class="col-md-4 form-group mb-2">
				<label for="inputLocation" class="fw-bold">Dove</label>
				<input
					type="text"
					class="form-control"
					id="inputLocation"
					placeholder="..."
				/>
			</div>
			<div class="col-12b btn-toolbar">
				<button type="button" class="btn btn-primary w-25 mx-auto"> Salva </button>
			</div>
		</div>
	</div>
</Layout>

<style lang="scss">
	.bg-dark {
		.form-control {
			background: none;
			border: none;
			border-bottom: 1px solid #434a52;
			border-radius: 0;
			box-shadow: none;
			outline: none;
			color: inherit;
		}
	}
</style>
