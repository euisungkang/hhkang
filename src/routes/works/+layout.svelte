<script lang="ts">
	import '../../app.css';

	let { children } = $props();
</script>

<!-- <div class="flex flex-col w-[100%] overflow-x-hidden"> -->
{@render children()}
<!-- </div> -->
