<script lang="ts">
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let {
		text,
		center = true,
		delay,
		letterDelay,
		stagger,
		distance
	}: {
		text: string;
		center?: boolean;
		delay?: number;
		letterDelay?: number;
		stagger?: boolean;
		distance?: string;
	} = $props();

	let visible: boolean = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<div class="flex items-center overflow-hidden {center ? 'justify-center' : 'justify-start'}">
	{#if stagger}
		{#each text as c, i}
			{#if visible}
				<div
					in:fly={{
						y: distance ?? '2vh',
						easing: sineOut,
						duration: 1000,
						delay: i * (letterDelay ?? 50),
						opacity: 1
					}}
				>
					{#if c != ' '}
						{c}
					{:else}
						&nbsp;
					{/if}
				</div>
			{/if}
		{/each}
	{:else if visible}
		<div
			in:fly={{
				y: distance ?? '2vh',
				easing: sineOut,
				duration: 1000,
				delay: delay ?? 0,
				opacity: 1
			}}
		>
			{text}
		</div>
	{/if}
</div>
