<script lang="ts">
	import DescriptionOverlay from '$lib/components/overlay/DescriptionOverlay.svelte';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import VideoCitation from '$lib/components/overlay/VideoCitation.svelte';
	import bgvideo from '$lib/media/YZ Loop.mp4';

	let overlayColor: string = '#e6e6e6';
</script>

<div class="flex h-screen w-screen items-center justify-center bg-[#121212] bg-black">
	<div class="z-10">
		<Logo {overlayColor} />
		<Tabs {overlayColor} delay={100} />
		<DescriptionOverlay {overlayColor} invert={true} delay={500} />
		<VideoCitation {overlayColor} delay={500} />
		<div class="font-baskervville text-7xl text-[#e6e6e6]"></div>
	</div>

	<video autoplay muted loop id="bgvideo" class="absolute top-0 h-screen">
		<source src={bgvideo} type="video/mp4" />
	</video>
</div>
