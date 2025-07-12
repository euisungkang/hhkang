<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import hhkangCutout from '$lib/media/HHKang Cutout w.png';
	// import hhkangBG from '$lib/media/HHKang Steam.jpg';
	import hhkangBG from '$lib/media/HHKang BG.jpg';
	import hhkangSteam from '$lib/media/HHKang Steam Cutout.png';
	import { onMount, onDestroy } from 'svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import TitleWords from '$lib/components/about/TitleWords.svelte';
	import Description from '$lib/components/about/Description.svelte';

	let load: boolean = $state(false);

	const textColor: string = '#e6e6e6';

	let scrollY = $state(0);
	let lenis: any;

	function onScroll() {
		scrollY = window.scrollY;
	}

	$inspect(scrollY);

	onMount(() => {
		lenis = new Lenis({
			autoRaf: true
		});
		lenis.on('scroll', (e: any) => {
			scrollY = e.animatedScroll;
		});
		setTimeout(() => {
			load = true;
		}, 300);
	});

	onDestroy(() => {
		if (lenis) lenis.destroy();
	});
</script>

<svelte:window on:scroll={onScroll} />

<div
	data-scroll-container
	class="dark min-h-screen flex flex-col w-[100%] bg-[#121212]"
	style:color={textColor}
>
	<div class="min-h-screen w-full overflow-hidden relative">
		<figure class="w-full">
			<img src={hhkangBG} alt="HHKang BG" class="object-cover w-full" />
		</figure>

		<figure
			class="absolute bottom-0 left-0 w-full"
			style="transform: translateY({scrollY * 0.2}px);"
		>
			<img src={hhkangCutout} alt="HHKang Cutout" class="w-full" />
		</figure>

		<figure
			class="absolute bottom-0 right-0 w-full"
			style="transform: translateY({scrollY * 0.4}px);"
		>
			<img src={hhkangSteam} alt="HHKang Steam" class="w-full" />
		</figure>
	</div>

	<div class="h-screen w-full bg-[#121212]">
		<!-- <Description /> -->
		<TitleWords {scrollY} />
	</div>

	<Logo overlayColor={textColor} />
	<Tabs overlayColor={textColor} />
</div>
