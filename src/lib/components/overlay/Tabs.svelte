<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF',
		cutoff = false,
		delay = 0,
		stagger = false
	}: {
		overlayColor: string;
		cutoff?: boolean;
		delay?: number;
		stagger?: boolean;
	} = $props();

	const staggerAmount: number = stagger ? 0 : 100;
</script>

{#if cutoff}
	<div
		class="w-screen h-24 fixed top-0 left-0 z-30 bg-[rgba(18, 18, 18, 0.50)]
          backdrop-blur-[2px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
	></div>
{/if}

<div
	class="absolute font-jws text-md space-x-12 top-12 right-12
        flex items-end leading-4 z-50 transition-colors duration-1000 ease-out"
	style:color={overlayColor}
>
	<a aria-label="About" href="/about" rel="noopener noreferrer">
		<TextSlideY text={'ABOUT'} {delay} />
	</a>
	<a aria-label="Gallery" href="/" rel="noopener noreferrer">
		<TextSlideY text={'GALLERY'} delay={delay + staggerAmount * 1} />
	</a>
	<a aria-label="Teaching" href="/teaching" rel="noopener noreferrer">
		<TextSlideY text={'TEACHING'} delay={delay + staggerAmount * 2} />
	</a>
	<a aria-label="Works" href="/works" rel="noopener noreferrer">
		<TextSlideY text={'WORKS'} delay={delay + staggerAmount * 3} />
	</a>
</div>
