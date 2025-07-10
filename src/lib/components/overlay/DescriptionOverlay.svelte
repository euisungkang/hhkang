<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF',
		delay = 0,
		invert = false
	}: {
		overlayColor: string;
		delay?: number;
		invert?: boolean;
	} = $props();

	const line1: string = 'ASSISTANT PROFESSOR OF EAST ASIAN LANGUAGES & CULTURES';
	// const line2: string = invert ? 'at Washington University in St. Louis' : 'INSPIRED BY ARISTIDE';
	const line2: string = 'AT WASHINGTON UNIVERSITY IN ST. LOUIS';
</script>

<div
	class="absolute text-xs leading-2.5 flex flex-col font-jws
        {invert ? 'bottom-12 left-12 items-start' : 'top-12 right-12 items-end'}"
	style:color={overlayColor}
>
	<TextSlideY text={line1} stagger={false} {delay} />
	<TextSlideY text={line2} stagger={false} delay={delay + 100} />
</div>
