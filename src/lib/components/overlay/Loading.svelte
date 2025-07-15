<script lang="ts">
	import TextSlideX from '../effects/TextSlideX.svelte';
	let {
		progress = 0
	}: {
		progress: number;
	} = $props();

	// $inspect(progress);
</script>

<div
	class="h-screen w-screen bg-[#121212] text-[#e6e6e6] font-tny text-5xl
        flex items-start justify-start pl-8 pt-8"
>
	<!-- {`${progress}`} -->
	{'Loading'}
</div>
