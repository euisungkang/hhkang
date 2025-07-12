<script lang="ts">
	import '../app.css';
	// import Logo from '$lib/components/overlay/Logo.svelte';
	// import Tabs from '$lib/components/overlay/Tabs.svelte';

	let { children } = $props();
</script>

<!-- <div class="z-10"> -->
<!-- </div> -->

{@render children()}
