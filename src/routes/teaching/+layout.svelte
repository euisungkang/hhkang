<script lang="ts">
	import '../../app.css';
	import TeachingMobile from '$lib/mobile/TeachingMobile.svelte';

	const textColor: string = '#e6e6e6';

	let { children } = $props();
</script>

<link
	rel="preload"
	as="font"
	href="/fonts/tny/TNY.woff2"
	type="font/woff2"
	crossorigin="anonymous"
/>

<div class="hidden lg:flex">
	{@render children()}
</div>

<div class="flex lg:hidden">
	<TeachingMobile {textColor} />
</div>
