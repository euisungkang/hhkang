<script lang="ts">
	import Card from '$lib/components/gallery/Card.svelte';
	import Loading from '$lib/components/overlay/Loading.svelte';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import { images } from '$lib/constants/gallery';
	import { fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { onMount, tick } from 'svelte';

	let colorState = $state({
		overlayColor: '#adb5ad',
		backgroundColor: '#121212'
	});

	let visible: boolean = $state(false);
	let trackVisible: boolean = $state(false);

	async function preload() {
		await Promise.all(
			images.slice(0, 8).map(
				(image) =>
					new Promise((resolve, reject) => {
						const img = new Image();
						img.onload = resolve;
						img.onerror = reject;
						img.src = image.image;
					})
			)
		);
	}

	onMount(async () => {
		await preload();
		visible = true;
		setTimeout(() => {
			trackVisible = true;
		}, 300);
		await tick();
	});
</script>

<!-- <svelte:head> -->
<!-- 	{#each images.slice(0, 8) as image} -->
<!-- 		<link rel="preload" as="image" href={image.image} /> -->
<!-- 	{/each} -->
<!-- </svelte:head> -->

{#if visible}
	<Tabs overlayColor={colorState.overlayColor} />
	<Logo overlayColor={colorState.overlayColor} />

	<div
		class="dark min-h-screen w-screen overflow-x-hidden transition-colors
            duration-1000 ease-out text-crimson py-48 px-8"
		style:background-color={colorState.backgroundColor}
		style:color={colorState.overlayColor}
	>
		<div
			class="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-32 gap-x-4"
		>
			{#each images as image, i}
				{#if trackVisible}
					<Card index={i} {image} />
				{/if}
			{/each}
		</div>
	</div>
{:else}
	<Loading progress={0} />
{/if}
