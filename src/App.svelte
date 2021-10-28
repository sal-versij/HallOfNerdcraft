<script lang="ts">
	import { Router, Route } from 'svelte-routing';
	import Home from './pages/home.svelte';
	import Console from './pages/admin/console.svelte';
	import CitationEditor from './pages/admin/CitationEditor.svelte';
	import NotFound from './pages/404.svelte';
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="/home" component={Home} />
	<Route path="/console" component={Console} />
	<Route path="/console/citation/:id/edit" component={CitationEditor} />
	<Route component={NotFound} />
</Router>
