<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF',
		delay = 0
	}: {
		overlayColor: string;
		delay?: number;
	} = $props();

	const line1: string = '1420 B.C. CHOSUN SUNDIAL MATERIAL TOPOGRAPHY';
</script>

<div
	class="absolute text-xs leading-2.5 flex-col bottom-12 right-12
        items-start font-jws hidden lg:flex"
	style:color={overlayColor}
>
	<TextSlideY text={line1} stagger={false} {delay} />
</div>
