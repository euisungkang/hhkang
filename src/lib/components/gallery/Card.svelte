<script lang="ts">
	import type { Image } from '$lib/constants/gallery';

	let {
		index,
		image
	}: {
		index: number;
		image: Image;
	} = $props();
</script>

<div class="flex items-start justify-center font-crimson">
	<div class="text-sm pr-2 h-full">
		{index + 1}
	</div>
	<div class="w-full flex flex-col">
		<figure class="w-full">
			<img src={image.image} alt="Gallery" class="object-cover" />
		</figure>
		<div class="w-full pt-2 text-lg">
			{image.caption}
		</div>
	</div>
</div>
