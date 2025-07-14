<script lang="ts">
	import LetterSlide from '../effects/LetterSlide.svelte';

	let {
		lines,
		scrollY = 0,
		load = true,
		delay = 0
	}: {
		lines: Array<string>;
		scrollY?: number;
		load?: boolean;
		delay?: number;
	} = $props();
</script>

<div
	class="absolute flex flex-col items-start justify-start top-0 left-0 mix-blend-difference z-10
        leading-[7.5vw] overflow-hidden font-baskervville text-[#e6e6e6] w-full h-full"
	style="transform: translateY({scrollY}px);"
>
	<div class="relative w-full h-screen flex flex-col">
		{#each lines as line, i}
			<div class="absolute left-0 bottom-0 flex w-full" style:bottom="{i * 7.5}vw">
				{#each line as c, j}
					<LetterSlide
						letter={c}
						reverse={false}
						{load}
						height={'7.5vw'}
						size={'10vw'}
						distance={10}
						delay={delay + j * 100}
					/>
				{/each}
			</div>
		{/each}
	</div>
</div>
