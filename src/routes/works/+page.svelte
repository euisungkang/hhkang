<script lang="ts">
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import type { Work } from '$lib/constants/works';
	import { works } from '$lib/constants/works';
	import { onMount } from 'svelte';
	import Carousel from '$lib/components/works/Carousel.svelte';
	import TextSlideY from '$lib/components/effects/TextSlideY.svelte';
	import Footer from '$lib/components/overlay/Footer.svelte';

	let flatImages: Array<{ index: number; image: string }> = $state([]);

	let load: boolean = $state(false);
	let selectedIndex: number = $state(-1);

	const backgroundColor: string = '#121212';
	const textColor: string = '#e6e6e6';

	function onMouseEnter(work: Work) {
		selectedIndex = work.index >= 15 ? -1 : work.index;
	}

	function onMouseLeave(work: Work) {
		selectedIndex = -1;
	}

	onMount(() => {
		flatImages = Object.values(works)
			.flat()
			.slice(0, 15)
			.map(({ index, image }) => ({ index, image }));
		setTimeout(() => {
			load = true;
		}, 300);
	});
</script>

<div
	class="absolute left-0 top-0 min-h-screen h-auto flex justify-center w-[100%] overflow-x-clip"
	style:background-color={backgroundColor}
	style:color={textColor}
>
	<!-- <div class="flex w-full items-center h-full justify-center"> -->
	<div
		class=" h-full w-full xl:w-[50%] float-left px-8 xl:px-0 pt-32 xl:pt-56 pb-32 flex justify-end"
	>
		<div class="h-full w-full xl:w-3/4 2xl:w-2/3 prose prose-dark font-crimson max-w-none">
			{#each Object.entries(works) as [k, v]}
				<h2
					class="transform-[opacity] duration-200 font-bold"
					style:opacity="{selectedIndex == -1 ||
					(v[0].index <= selectedIndex && selectedIndex <= v[v.length - 1].index)
						? 100
						: 50}%"
				>
					<TextSlideY text={k} center={false} distance={'3rem'} delay={50 * v.length} />
				</h2>
				<div class="space-y-5">
					{#each v as work}
						<div
							onmouseenter={() => onMouseEnter(work)}
							onmouseleave={() => onMouseLeave(work)}
							class="transform-[opacity] text-md xl:text-lg duration-200 leading-5"
							style:opacity="{selectedIndex == -1 || work.index == selectedIndex ? 100 : 50}%"
							aria-controls="0,1"
							aria-valuenow="0"
							role="scrollbar"
							tabindex="0"
						>
							<TextSlideY
								text={work.citation}
								center={false}
								distance={'4rem'}
								visibleDelay={50 * Object.keys(works).indexOf(k)}
								delay={50 * work.index}
							/>
							<!-- {work.citation}<br /> -->
						</div>
					{/each}
				</div>
			{/each}
			<div class="pt-10 underline text-2xl">
				<a
					href="https://drive.google.com/file/d/1pHn_A6rkDc4yejp-LZwo4VVzvHuWYaBA/view?usp=sharing"
					target="_blank"
				>
					<TextSlideY
						text={'Full CV'}
						distance={'4rem'}
						center={false}
						delay={50 * flatImages.length}
					/>
				</a>
			</div>
		</div>
	</div>

	<div class="sticky w-[50%] h-[100%] right-0 float-right top-0 hidden xl:flex">
		<Carousel images={flatImages} {selectedIndex} />
	</div>
	<!-- </div> -->

	<!-- <div class="absolute bottom-0 w-full h-96"> -->
	<!-- 	<Footer load={true} /> -->
	<!-- </div> -->

	<Logo overlayColor={textColor} />
	<Tabs overlayColor={textColor} {backgroundColor} cutoff={false} />
</div>
