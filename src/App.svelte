<script lang="ts">
	import { Router, Route } from 'svelte-routing';
	import Home from './pages/home.svelte';
	import Console from './pages/admin/console.svelte';
	import NotFound from './pages/404.svelte';
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="/home" component={Home} />
	<Route path="/admin" component={Console} />
	<Route component={NotFound} />
</Router>
