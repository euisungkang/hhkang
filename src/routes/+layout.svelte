<script lang="ts">
	import '../app.css';

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
