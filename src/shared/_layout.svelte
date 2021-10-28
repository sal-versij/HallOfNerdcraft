<script lang="ts">
	import Header from './Header.svelte';
</script>

<section id="content">
	<Header />
	<main><slot /></main>
</section>

<style lang="scss">
	#content {
		display: flex;
		flex-direction: column;
		height: 100%;

		main {
			margin-top: 20px;
			margin-bottom: 20px;
			flex-grow: 1;
		}
	}
</style>
