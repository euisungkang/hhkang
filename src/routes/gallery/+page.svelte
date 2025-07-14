<script lang="ts">
	import Card from '$lib/components/gallery/Card.svelte';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import { images } from '$lib/constants/gallery';

	let colorState = $state({
		overlayColor: '#adb5ad',
		backgroundColor: '#121212'
	});
	let selectedIndex: number = $state(-1);
</script>

<Tabs overlayColor={colorState.overlayColor} />
<Logo overlayColor={colorState.overlayColor} />

<div
	class="dark min-h-screen w-screen overflow-x-hidden transition-colors
            duration-1000 ease-out text-crimson py-48 px-8"
	style:background-color={colorState.backgroundColor}
	style:color={colorState.overlayColor}
>
	<div class="h-full w-full grid grid-cols-4 gap-y-32 gap-x-4">
		{#each images as image, i}
			<Card index={i} {image} />
		{/each}
	</div>
</div>
