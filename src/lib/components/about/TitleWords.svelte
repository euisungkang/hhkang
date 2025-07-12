<script lang="ts">
	let {
		scrollY
	}: {
		scrollY: number;
	} = $props();
</script>

<div
	class="w-full absolute bottom-0 left-0 text-[10vw] leading-[14vh] font-baskervville
  text-[#e6e6e6] mix-blend-difference"
	style="transform: translateY({scrollY * 0.94}px);"
>
	KOREA<br />
	SCIENCE<br />
	HUMANITIES<br />
</div>
