<script lang="ts">
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import type { Work } from '$lib/constants/works';
	import { works } from '$lib/constants/works';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { sineInOut, sineOut } from 'svelte/easing';
	import Carousel from '$lib/components/works/Carousel.svelte';

	let flatImages: Array<{ index: number; image: string }> = $state([]);

	let load: boolean = $state(false);
	let selectedIndex: number = $state(-1);

	const textColor: string = '#e6e6e6';

	function onMouseEnter(work: Work) {
		selectedIndex = work.index;
	}

	function onMouseLeave(work: Work) {
		selectedIndex = -1;
	}

	onMount(() => {
		flatImages = Object.values(works)
			.flat()
			.map(({ index, image }) => ({ index, image }));
		setTimeout(() => {
			load = true;
		}, 300);
	});
</script>

<div class="absolute left-0 top-0 h-auto dark w-screen bg-[#121212]" style:color={textColor}>
	<div
		class="h-full w-[50vw] float-left pt-40 pb-32 pl-12 pr-8 prose prose-dark font-baskervville max-w-none text-justify"
	>
		{#each Object.entries(works) as [k, v]}
			<h4>{k}</h4>
			{#each v as work}
				<div
					onmouseenter={() => onMouseEnter(work)}
					onmouseleave={() => onMouseLeave(work)}
					class="transform-[opacity]"
					style:opacity="{selectedIndex == -1 || work.index == selectedIndex ? 100 : 50}%"
					aria-controls="0,1"
					aria-valuenow="0"
					role="scrollbar"
					tabindex="0"
				>
					{work.citation}<br />
				</div>
			{/each}
		{/each}
		<div class="pt-10 underline">
			<a href="sample" download> Full CV </a>
		</div>
	</div>

	<div class="sticky w-[50%] h-screen right-0 float-right top-0">
		<Carousel images={flatImages} {selectedIndex} />
	</div>

	<Logo overlayColor={textColor} />
	<Tabs overlayColor={textColor} cutoff={true} />
</div>
