<script lang="ts">
	import { Router, Route } from 'svelte-routing';
	import Home from './pages/home.svelte';
	import NotFound from './pages/404.svelte';

	const routes = {
		'/': Home,
		'/*': NotFound,
	};
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="/home" component={Home} />
	<Route component={NotFound} />
</Router>
