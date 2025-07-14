<script lang="ts">
	import DescriptionOverlay from '$lib/components/overlay/DescriptionOverlay.svelte';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import VideoCitation from '$lib/components/overlay/VideoCitation.svelte';
	import bgvideo from '$lib/media/YZ Loop.mp4';
	import mobilebg from '$lib/media/XY Small.mp4';

	let overlayColor: string = '#e6e6e6';
</script>

<div class="flex h-screen w-screen items-center justify-center bg-black overflow-hidden">
	<div class="z-10">
		<Logo {overlayColor} />
		<Tabs {overlayColor} backgroundColor={'black'} delay={100} />
		<DescriptionOverlay {overlayColor} invert={true} delay={500} />
		<VideoCitation {overlayColor} delay={500} />
	</div>

	<video autoplay muted loop id="bgvideo" class="absolute top-0 h-screen hidden lg:flex">
		<source src={bgvideo} type="video/mp4" />
	</video>

	<video
		autoplay
		muted
		loop
		id="mobilebg"
		class="absolute top-0 h-[100%] flex lg:hidden"
		playsinline
	>
		<source src={mobilebg} type="video/mp4" />
	</video>
</div>
