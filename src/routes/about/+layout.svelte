<script lang="ts">
	import '../../app.css';
	import AboutMobile from '$lib/mobile/AboutMobile.svelte';

	let { children } = $props();
</script>

<div class="hidden lg:flex">
	{@render children()}
</div>

<div class="flex lg:hidden">
	<AboutMobile textColor={'#121212'} backgroundColor={'#e6e6e6'} />
</div>
