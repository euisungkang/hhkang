<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import Snap from 'lenis/snap';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import hhkangCutout from '$lib/media/HHKang Cutout w.png';
	// import hhkangBG from '$lib/media/HHKang Steam.jpg';
	import hhkangBG from '$lib/media/HHKang BG.jpg';
	import hhkangSteam from '$lib/media/HHKang Steam Cutout.png';
	import { onMount, onDestroy } from 'svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import TitleWords from '$lib/components/about/TitleWords.svelte';
	import Description1 from '$lib/components/about/Description1.svelte';
	import Description2 from '$lib/components/about/Description2.svelte';

	let innerHeight: number = $state(0);
	const textColor: string = '#e6e6e6';

	let scrollY = $state(0);
	let lenis: any;
	let snap: any;
	let progress: number = $state(0);

	const page1Lines: Array<string> = ['HUMANITIES', 'SCIENCE', 'KOREA'];
	const page2Lines: Array<string> = ['MATERIAL_DESIGN'];
	const page2Description: string = 'TESTING';
	const page3Lines: Array<string> = ['ASSISTANT', 'LANGUAGES', 'CULTURES'];

	$inspect(scrollY, innerHeight, progress);

	onMount(() => {
		lenis = new Lenis({
			autoRaf: true
		});
		lenis.scrollTo(0);
		lenis.on('scroll', (e: any) => {
			scrollY = e.animatedScroll;
			progress = e.progress;
		});
		snap = new Snap(lenis, {
			type: 'proximity'
		});
		for (let i = 0; i < 3; i++) {
			snap.add(i * innerHeight);
		}
	});

	onDestroy(() => {
		if (lenis) lenis.destroy();
		if (snap) snap.destroy();
	});
</script>

<svelte:window bind:innerHeight />

<Logo overlayColor={textColor} sticky={true} {scrollY} />
<Tabs overlayColor={textColor} />

<div
	data-scroll-container
	class="dark min-h-screen flex flex-col w-[100%] bg-[#121212]"
	style:color={textColor}
>
	<div class="max-h-screen w-full overflow-hidden relative">
		<figure class="w-full">
			<img src={hhkangBG} alt="HHKang BG" class="object-cover w-full" />
		</figure>

		<figure
			class="absolute -bottom-[16vh] left-0 w-full"
			style="transform: translateY({scrollY * 0.2}px);"
		>
			<img src={hhkangCutout} alt="HHKang Cutout" class="w-full" />
		</figure>

		<figure
			class="absolute -bottom-[16vh] right-0 w-full"
			style="transform: translateY({scrollY * 0.4}px);"
		>
			<img src={hhkangSteam} alt="HHKang Steam" class="w-full" />
		</figure>
	</div>

	<TitleWords {scrollY} lines={page1Lines} load={progress <= 0.05} />

	<div class="h-screen w-full bg-[#e6e6e6] relative">
		<Description1 overlayColor={'#121212'} />
	</div>

	<div class="h-screen w-full bg-[#121212] text-[#e6e6e6] relative">
		<Description2 overlayColor={'#e6e6e6'} />
		<TitleWords scrollY={0} lines={page2Lines} load={progress >= 0.6} />
		<!-- <TitleWords scrollY={0} lines={page3Lines} load={progress >= 0.6} /> -->
	</div>
</div>
