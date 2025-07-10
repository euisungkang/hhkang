<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF',
		delay = 0,
		stagger = false
	}: {
		overlayColor: string;
		delay?: number;
		stagger?: boolean;
	} = $props();

	const staggerAmount: number = stagger ? 0 : 100;
</script>

<div
	class="absolute font-baskervville text-lg space-x-12 top-12 right-12 flex items-end leading-3.5"
	style:color={overlayColor}
>
	<!-- target="_blank" -->
	<a aria-label="About" href="/" rel="noopener noreferrer">
		<TextSlideY text={'ABOUT'} {delay} />
		<!-- <div class="border w-full" style:border-color={overlayColor}></div> -->
	</a>
	<a aria-label="Gallery" href="/" rel="noopener noreferrer">
		<TextSlideY text={'GALLERY'} delay={delay + staggerAmount * 1} />
	</a>
	<a aria-label="Teaching" href="/" rel="noopener noreferrer">
		<TextSlideY text={'TEACHING'} delay={delay + staggerAmount * 2} />
	</a>
	<a aria-label="Works" href="/" rel="noopener noreferrer">
		<TextSlideY text={'WORKS'} delay={delay + staggerAmount * 3} />
	</a>
</div>
