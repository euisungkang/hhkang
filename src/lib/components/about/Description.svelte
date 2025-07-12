<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';
	// const line1: string = 'ASSISTANT PROFESSOR OF EAST ASIAN LANGUAGES & CULTURES';
	// const line2: string = 'AT WASHINGTON UNIVERSITY IN ST. LOUIS';
	const line1: string = 'Assistant Professor of East Asian Languages & Cultures';
	const line2: string = 'at Washington University in St. Louis';
</script>

<!-- <div class="w-full text-xl flex flex-col font-jws items-center text-[#e6e6e6]"> -->
<div class="w-full text-xl flex flex-col font-baskervville items-center text-[#e6e6e6]">
	<TextSlideY text={line1} stagger={false} />
	<TextSlideY text={line2} stagger={false} delay={100} />
</div>
