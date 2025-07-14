<script lang="ts">
	import '../../app.css';
	import TeachingMobile from '$lib/mobile/TeachingMobile.svelte';

	const textColor: string = '#e6e6e6';

	let { children } = $props();
</script>

<div class="hidden lg:flex">
	{@render children()}
</div>

<div class="flex lg:hidden">
	<TeachingMobile {textColor} />
</div>
