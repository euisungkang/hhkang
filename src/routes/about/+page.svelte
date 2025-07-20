<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import Snap from 'lenis/snap';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import hhkangCutout from '$lib/media/HHKang Cutout.webp';
	import hhkangBG from '$lib/media/HHKang BG.webp';
	import hhkangSteam from '$lib/media/HHKang Steam Cutout.webp';
	import { onMount, onDestroy, tick } from 'svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import TitleWords from '$lib/components/about/TitleWords.svelte';
	import Description1 from '$lib/components/about/Description1.svelte';
	import Description2 from '$lib/components/about/Description2.svelte';
	import Description3 from '$lib/components/about/Description3.svelte';
	import Loading from '$lib/components/overlay/Loading.svelte';
	import NavUi from '$lib/components/about/NavUI.svelte';

	const preloadList = [hhkangCutout, hhkangBG, hhkangSteam];
	let amountLoaded: number = $state(0);

	let visible: boolean = $state(false);
	let innerHeight: number = $state(0);
	const textColor: string = '#e6e6e6';

	let scrollY = $state(0);
	let lenis: any;
	let snap: any;
	let progress: number = $state(0);

	let selectedIndex: number = $state(0);
	let maxIndex: number = $state(1);
	const page1Lines: Array<string> = ['HUMANITIES', 'SCIENCE', 'KOREA'];
	let page1Load: boolean = $state(false);
	let page1Content: boolean = $state(false);
	const page2Lines: Array<string> = ['MATERIAL_DESIGN'];
	let page2Load: boolean = $state(false);
	let page2Content: boolean = $state(false);
	const page3Lines: Array<string> = ['SUNDIALS'];
	let page3Load: boolean = $state(false);
	let page3Content: boolean = $state(false);

	$effect(() => {
		// Page 0
		if (0 <= scrollY && scrollY <= innerHeight) {
			// selectedIndex = 0;
			if (innerHeight * 0.9 <= scrollY && scrollY <= innerHeight * 0.99) {
				page1Content = true;
			} else if (scrollY == innerHeight) {
				page2Load = true;
				maxIndex = Math.max(maxIndex, 2);
			}

			// Page 1
		} else if (innerHeight < scrollY && scrollY <= innerHeight * 2) {
			// selectedIndex = 1;
			if (innerHeight * 1.9 <= scrollY && scrollY <= innerHeight * 1.99) {
				page2Content = true;
			} else if (scrollY == innerHeight * 2) {
				page3Load = true;
				maxIndex = Math.max(maxIndex, 3);
			}

			// Page 2
		} else if (innerHeight * 2 < scrollY && scrollY <= innerHeight * 3) {
			// selectedIndex = 2;
			if (innerHeight * 2.9 <= scrollY && scrollY <= innerHeight * 2.99) {
				page3Content = true;
			} else if (scrollY == innerHeight * 3) {
			}
		}
	});

	function indexScrollTo(indexTo: number): boolean {
		if (indexTo > maxIndex || indexTo < 0) return false;
		lenis.scrollTo(indexTo * innerHeight, { lock: true });
		return true;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowUp' && selectedIndex > 0) {
			e.preventDefault();
			if (indexScrollTo(selectedIndex - 1)) selectedIndex--;
		} else if (e.key === 'ArrowDown' && selectedIndex < maxIndex) {
			e.preventDefault();
			if (indexScrollTo(selectedIndex + 1)) selectedIndex++;
		}
	}

	// $inspect(selectedIndex);

	async function preload(srcs: Array<string>) {
		await Promise.all(
			srcs.map(
				(src) =>
					new Promise((resolve, reject) => {
						const img = new Image();
						img.onload = resolve;
						img.onerror = reject;
						img.src = src;
						amountLoaded++;
					})
			)
		);
	}

	onMount(async () => {
		window.scrollTo(0, 0);
		lenis = new Lenis({
			autoRaf: true
		});
		lenis.on('scroll', (e: any) => {
			scrollY = e.animatedScroll;
			progress = e.progress;
		});
		await preload(preloadList);
		visible = true;
		await tick();

		setTimeout(() => {
			page1Load = true;
		}, 500);
		// snap = new Snap(lenis, {
		// 	type: 'proximity'
		// });
	});

	onDestroy(() => {
		if (lenis) lenis.destroy();
		if (snap) snap.destroy();
	});
</script>

<svelte:window on:keydown={handleKeydown} bind:innerHeight />

{#if visible}
	<Logo overlayColor={textColor} sticky={true} {scrollY} />
	<Tabs overlayColor={textColor} />
	<div
		data-scroll-container
		class="dark min-h-screen flex flex-col w-[100%] bg-[#121212]"
		style:color={textColor}
	>
		<div class="max-h-screen w-full overflow-hidden relative">
			<figure class="w-full">
				<img src={hhkangBG} alt="HHKang BG" class="object-cover w-full" />
			</figure>

			<figure
				class="absolute -bottom-[16vh] left-0 w-full"
				style="transform: translateY({scrollY * 0.2}px);"
			>
				<img src={hhkangCutout} alt="HHKang Cutout" class="w-full" />
			</figure>

			<figure
				class="absolute -bottom-[16vh] right-0 w-full"
				style="transform: translateY({scrollY * 0.4}px);"
			>
				<img src={hhkangSteam} alt="HHKang Steam" class="w-full" />
			</figure>
			<TitleWords {scrollY} lines={page1Lines} delay={100} load={progress <= 0.05} />
			<NavUi index={0} dark={true} load={page1Load && progress <= 0.05} scrollTo={indexScrollTo} />
		</div>

		<div class="h-screen w-full bg-[#e6e6e6] text-[#121212] relative">
			<Description1 overlayColor={'#121212'} />
			<NavUi
				index={1}
				dark={false}
				load={page1Content}
				unload={page2Content}
				scrollTo={indexScrollTo}
			/>
		</div>

		{#if page2Load}
			<div class="h-screen w-full bg-[#121212] text-[#e6e6e6] relative">
				<Description2 overlayColor={'#e6e6e6'} />
				<TitleWords lines={page2Lines} load={page2Content} />
				<NavUi
					index={2}
					dark={true}
					load={page2Content}
					unload={page3Content}
					scrollTo={indexScrollTo}
				/>
			</div>
		{/if}

		{#if page3Load}
			<div class="h-screen w-full bg-black text-[#e6e6e6] relative">
				<Description3 overlayColor={'#e6e6e6'} />
				<TitleWords lines={page3Lines} load={page3Content} />
				<NavUi index={3} dark={true} load={page3Content} unload={true} scrollTo={indexScrollTo} />
			</div>
		{/if}
	</div>
{:else}
	<Loading progress={Math.round((amountLoaded / preloadList.length) * 100)} />
{/if}
