<script lang="ts">
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
