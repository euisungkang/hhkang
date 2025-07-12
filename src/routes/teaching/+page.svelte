<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { images } from '$lib/constants/teaching';
	import { sineOut } from 'svelte/easing';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import KitchenStudioOverlay from '$lib/components/overlay/teaching/KitchenStudioOverlay.svelte';
	import ImaginedPastsOverlay from '$lib/components/overlay/teaching/ImaginedPastsOverlay.svelte';
	import MaterialCultureOverlay from '$lib/components/overlay/teaching/MaterialCultureOverlay.svelte';
	import KoreanCivOverlay from '$lib/components/overlay/teaching/KoreanCivOverlay.svelte';
	import StemOverlay from '$lib/components/overlay/teaching/STEMOverlay.svelte';

	let mouseDownX: number = 0;
	let mouseUpX: number = 50;

	let gap: string = $state('1%');
	let innerWidth: number = $state(0);
	let percentage: number = $state(50);
	let imagePercentage: number = $state(100);
	let selectedIndex: number = $state(-1);
	let grayscaleIndex: number = $state(0);
	let letterReverse: boolean = $state(false); // ! = left -> right
	let trackVisible: boolean = $state(false);
	let colorState = $state({
		overlayColor: '#adb5ad',
		backgroundColor: '#121212'
	});

	function mouseDownAt(e: MouseEvent) {
		mouseDownX = e.clientX;
	}

	function mouseUpAt() {
		mouseDownX = 0;
		mouseUpX = percentage;
	}

	function mouseMove(e: MouseEvent) {
		if (mouseDownX == 0) return;

		const mouseDelta = mouseDownX - e.clientX;
		const maxDelta = innerWidth / 2;
		const rawPercentage = (mouseDelta / maxDelta) * -100;

		// 54 (104) = 14 * 7 + 6 (gaps 1)
		percentage = Math.max(Math.min(rawPercentage + mouseUpX, 50), -54);
		imagePercentage = percentage / 2 + 50;
		grayscaleIndex = Math.min(
			// 15 = 14 (width) + 1
			Math.floor(-(percentage - 50) / 15),
			images.length - 1
		);

		// Reset selected image and reset gap
		selectedIndex = -1;
		gap = '1%';
		letterReverse = false;
		colorState.backgroundColor = '#121212';
		colorState.overlayColor = '#adb5ad';
	}

	function expandImage(i: number) {
		if (i == -1) return;
		// (-14 (def vw) - 7 (post-ml)) * i + (25 (half of expanded))
		letterReverse = selectedIndex != -1 && i < selectedIndex;
		percentage = -21 * i + 25;
		selectedIndex = i;
		grayscaleIndex = i;
		gap = '7%';
		imagePercentage = 50;

		colorState.backgroundColor = images[i].backgroundColor;
		colorState.overlayColor = images[i].overlayColor;
	}

	onMount(() => {
		setTimeout(() => {
			trackVisible = true;
			expandImage(selectedIndex);
			console.log('<Developed by Easton Kang> https://eastonkang.com');
			// expandImage(6);
		}, 500);
	});
</script>

<svelte:window bind:innerWidth />

<Tabs overlayColor={colorState.overlayColor} />
<Logo overlayColor={colorState.overlayColor} />

<div
	class="dark h-screen w-screen overflow-hidden transition-colors duration-1000 ease-out"
	style:background-color={colorState.backgroundColor}
	role="scrollbar"
	aria-controls="0,1"
	aria-valuenow="0"
	tabindex="0"
	onmousedown={(e) => mouseDownAt(e)}
	onmouseup={() => mouseUpAt()}
	onmousemove={(e) => mouseMove(e)}
>
	<div class="h-full w-full relative">
		<div
			class="flex absolute top-[50%] w-full items-center justify-start
             transition-transform duration-1000 ease-out"
			style:transform="translate({percentage}%, -50%)"
		>
			{#each images as img, i}
				{#if trackVisible}
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions-->
					<!-- svelte-ignore a11y_click_events_have_key_events-->
					<img
						src={img.image}
						fetchpriority={i <= 4 ? 'high' : 'low'}
						class="object-cover object-center select-none h-[50vh]
                    transition-[object-position,width,filter,opacity,margin-left] duration-1000 ease-out"
						onclick={() => expandImage(i)}
						in:fly={{ x: '50vw', duration: 1000 + 50 * i, easing: sineOut, delay: 100 * i }}
						style:object-position="{imagePercentage}% center"
						style:margin-left={i != 0 ? gap : '0%'}
						style:filter="grayscale({i == grayscaleIndex ? 0 : 100}%)"
						style:opacity="{i == grayscaleIndex ? 100 : 40}%"
						style:width={i == selectedIndex ? '50vw' : '14vw'}
						alt="Test"
						draggable={false}
					/>
				{/if}
			{/each}
		</div>
		{#if selectedIndex == 0}
			<KitchenStudioOverlay color={colorState.overlayColor} {letterReverse} />
		{:else if selectedIndex == 1}
			<ImaginedPastsOverlay color={colorState.overlayColor} {letterReverse} />
		{:else if selectedIndex == 2}
			<MaterialCultureOverlay color={colorState.overlayColor} {letterReverse} />
		{:else if selectedIndex == 3}
			<KoreanCivOverlay color={colorState.overlayColor} {letterReverse} />
		{:else if selectedIndex == 4}
			<StemOverlay color={colorState.overlayColor} {letterReverse} />
		{/if}
	</div>
</div>
