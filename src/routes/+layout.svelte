<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import '../app.css';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<link
	rel="preload"
	as="font"
	href="/fonts/crimson/CrimsonText-Regular.ttf"
	type="font/ttf"
	crossorigin="anonymous"
/>

{@render children()}
