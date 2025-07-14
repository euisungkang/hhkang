<script lang="ts">
	import type { Image } from '$lib/constants/gallery';

	let {
		index,
		image
	}: {
		index: number;
		image: Image;
	} = $props();

	function getRandomInteger(min, max) {
		min = Math.ceil(min); // Ensure min is rounded up to the nearest whole number
		max = Math.floor(max); // Ensure max is rounded down to the nearest whole number
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
</script>

<div class="flex items-start justify-center font-crimson">
	<div class="text-sm pr-2 h-full">
		{index + 1}
	</div>
	<div class="w-full flex flex-col">
		<figure class="w-full">
			<img src={image.image} alt="Gallery" class="object-cover" />
			<!-- {#if index % 4 == 0} -->
			<!-- <img -->
			<!-- 	src="https://picsum.photos/600/{getRandomInteger(600, 1200)}?random={index}" -->
			<!-- 	alt="Gallery" -->
			<!-- 	class="object-cover" -->
			<!-- /> -->
			<!-- {:else} -->
			<!-- 	<img src="https://picsum.photos/600?random={index}" alt="Gallery" class="object-cover" /> -->
			<!-- {/if} -->
		</figure>
		<div class="w-full pt-2 text-lg">
			{image.caption}
		</div>
	</div>
</div>
