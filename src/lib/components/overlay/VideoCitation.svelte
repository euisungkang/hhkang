<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF',
		delay = 0
	}: {
		overlayColor: string;
		delay?: number;
	} = $props();

	const line1: string = 'KOREAN IVORY SCAPHE DIAL';
	const line2: string = 'OXFORD HISTORY OF SCIENCE MUSEUM';
</script>

<div
	class="absolute text-[0.6rem] lg:text-xs leading-2.5 flex-col font-jws hidden lg:flex
        bottom-8 right-8 lg:bottom-12 lg:left-12 items-end justify-end mix-blend-difference"
	style:color={overlayColor}
>
	<TextSlideY text={line1} stagger={false} {delay} />
	<TextSlideY text={line2} stagger={false} delay={delay + 100} />
</div>
<!-- <div -->
<!-- 	class="absolute text-xs leading-2.5 flex-col bottom-12 right-12 -->
<!--         items-start font-jws hidden lg:flex" -->
<!-- 	style:color={overlayColor} -->
<!-- > -->
<!-- 	<TextSlideY text={line1} stagger={false} {delay} /> -->
<!-- </div> -->
