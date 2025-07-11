<script lang="ts">
	import Logo from '$lib/components/overlay/Logo.svelte';
	// import hhkangBG from '$lib/media/HHKang Steam.webp';
	// import hhkangCutout from '$lib/media/HHKang Cutout.png';
	import hhkangCutout from '$lib/media/HHKang Cutout w.png';
	import hhkangBG from '$lib/media/HHKang BG.jpg';
	import hhkangSteam from '$lib/media/HHKang Steam Cutout.png';
	import { onMount } from 'svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';

	let load: boolean = $state(false);

	const textColor: string = '#e6e6e6';

	let scrollY = $state(0);

	function onScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		setTimeout(() => {
			load = true;
		}, 300);
	});
</script>

<svelte:window on:scroll={onScroll} />

<div class="dark h-auto flex flex-col w-screen bg-[#121212]" style:color={textColor}>
	<div class="h-[116.5vh] w-full relative overflow-hidden">
		<figure class="absolute bottom-0 left-0 w-screen">
			<img src={hhkangBG} alt="HHKang BG" class="object-cover w-full" />
		</figure>

		<figure
			class="absolute bottom-0 left-0 w-screen will-change-transform"
			style="transform: translateY({scrollY * 0.2}px);"
		>
			<img src={hhkangCutout} alt="HHKang Cutout" class="w-full" />
		</figure>

		<figure
			class="absolute bottom-0 right-0 w-screen will-change-transform"
			style="transform: translateY({scrollY * 0.4}px);"
		>
			<img src={hhkangSteam} alt="HHKang Steam" class="w-full" />
		</figure>

		<div
			class="w-full absolute bottom-[16.5vh] left-0 text-[12rem] leading-36 font-baskervville
      text-[#e6e6e6] mix-blend-difference"
			style="transform: translateY({scrollY * 0.5}px);"
		>
			KOREA<br />
			SCIENCE<br />
			HUMANITIES<br />
		</div>
	</div>

	<div class="h-screen w-full bg-[#121212]"></div>

	<Logo overlayColor={textColor} />
	<Tabs overlayColor={textColor} />
</div>
