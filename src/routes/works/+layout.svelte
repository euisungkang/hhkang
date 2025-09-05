<script lang="ts">
	import '../../app.css';
	import Footer from '$lib/components/overlay/Footer.svelte';

	let { children } = $props();
</script>

<!-- <div class="flex flex-col w-[100%] overflow-x-hidden"> -->
{@render children()}
<!-- </div> -->

<!-- <footer class="h-96 w-full"> -->
<!-- 	<Footer load={true} /> -->
<!-- </footer> -->
