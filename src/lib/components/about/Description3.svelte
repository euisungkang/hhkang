<script lang="ts">
	import sundial from '$lib/media/sundial.webp';
	import XZLoop from '$lib/media/XZ Loop.mp4';
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
	<video autoplay muted loop id="bgvideo" class="absolute left-[7.5vw] top-[25vh] w-[65vw]">
		<source src={XZLoop} type="video/mp4" />
	</video>

	<!-- <figure class="absolute left-[75vw] top-[55vh] h-[45vh] rotate-90"> -->
	<!-- 	<img src={sundial} alt="Sundial" class="object-cover h-full" /> -->
	<!-- </figure> -->

	<div
		class="absolute left-[65vw] top-[35vh] w-[45ch] text-justify font-crimson text-base 2xl:text-[1.3rem] text-[#e6e6e6] mix-blend-difference"
	>
		Kang has wide-ranging interests in digital humanities. His DH projects include a network
		analysis of international criminals in seventeenth-century Nagasaki, published in the Journal of
		Cultural Analytics. He also works with imaging scientists, designers, and precision metalworkers
		to critically “rework” historical material culture, which has included disassembling and CT
		scanning artifacts, mocking up mechanical drawings in 3D, and fabricating prototypes for
		testing.

		<!-- His research has also appeared (or is forthcoming) in the fields of ethnomusicology, diplomatic -->
		<!-- history, and global military history, in venues such as Routledge Handbook of Asian Music, -->
		<!-- Journal of World History, The Military Revolution and Revolutions in Military Affairs, and The -->
		<!-- Journal of Asian Studies. -->
		<!-- <br /><br /> -->
		<!-- Prior to joining the WashU faculty in 2021, he was a D. Kim Postdoctoral Fellow in the Department -->
		<!-- of the History of Science and Technology, Johns Hopkins University. He received his Ph.D. in History -->
		<!-- and East Asian Languages from Harvard University. -->
	</div>
</div>
