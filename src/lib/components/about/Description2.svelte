<script lang="ts">
	import gun from '$lib/media/about-gun.webp';
	import TextSlideX from '../effects/TextSlideX.svelte';

	let {
		overlayColor
	}: {
		overlayColor: string;
	} = $props();
</script>

<div
	class="w-full h-full transition-colors duration-1000 ease-out flex items-center justify-center"
	style:color={overlayColor}
>
	<div class="inline-block absolute top-12 right-12 font-crimson text-lg">
		<TextSlideX text="_2" />
	</div>

	<figure class="absolute left-[7.5vw] top-[10vh] w-[85vw] max-h-[83vh] overflow-y-hidden">
		<img src={gun} alt="Choson Gun" class="object-cover" />
	</figure>

	<div
		class="absolute left-[60vw] top-[50vh] w-[50ch] font-crimson text-base 2xl:text-[1.3rem] text-[#e6e6e6] mix-blend-difference"
	>
		Kang is a digital humanist as well. His DH projects include a network analysis of international
		criminals in seventeenth-century Nagasaki, published in the Journal of Cultural Analytics. He
		also works with imaging scientists, designers, and precision metalworkers to critically “rework”
		historical material culture, which has included disassembling and CT scanning artifacts, mocking
		up mechanical drawings in 3D, and fabricating prototypes for testing. Finally, with Michelle
		Suh, he co-designed the search engine and research platform Silloker, which provides exploratory
		data analysis on five centuries of historical data from Chosŏn Korea.
	</div>
</div>
