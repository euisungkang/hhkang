<script lang="ts">
	import LetterSlide from '../effects/LetterSlide.svelte';

	let {
		scrollY
	}: {
		scrollY: number;
	} = $props();

	const line1: string = 'KOREA';
	const line2: string = 'SCIENCE';
	const line3: string = 'HUMANITIES';
</script>

<div
	class="absolute flex flex-col items-start justify-start bottom-0 left-0 mix-blend-difference
        leading-[7.5vw] overflow-hidden font-baskervville text-[#e6e6e6]"
	style="transform: translateY({scrollY}px);"
>
	<!-- <div>HUMANITIES</div> -->
	<!-- <div>SCIENCE</div> -->
	<div class="flex">
		{#each line1 as c, i}
			<LetterSlide
				letter={c}
				reverse={false}
				height={'7.5vw'}
				size={'10vw'}
				distance={10}
				delay={0 + i * 50}
			/>
		{/each}
	</div>
	<div class="flex">
		{#each line2 as c, i}
			<LetterSlide
				letter={c}
				reverse={false}
				height={'7.5vw'}
				size={'10vw'}
				distance={10}
				delay={100 + i * 50}
			/>
		{/each}
	</div>
	<div class="flex">
		{#each line3 as c, i}
			<LetterSlide
				letter={c}
				reverse={false}
				height={'7.5vw'}
				size={'10vw'}
				distance={10}
				delay={200 + i * 50}
			/>
		{/each}
	</div>
</div>
